import { Box, Button, Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { ApiResponse, SystemStatus } from '@stackbuild/types';
export default function App() {
  const status = useQuery({
    queryKey: ['status'],
    queryFn: async () =>
      (
        await axios.get<ApiResponse<SystemStatus>>(
          `${import.meta.env.VITE_API_URL ?? 'http://localhost:8081/api/v1'}/status`,
          { timeout: 5000 },
        )
      ).data.data,
    retry: false,
  });
  return (
    <>
      <div className="desktop-notice">
        <p>RBC GO</p>
        <h1>เริ่มเดินทางบนมือถือของคุณ</h1>
        <p>เปิดเว็บแอปด้วยสมาร์ทโฟนเพื่อใช้งานบัตร วอลเล็ต และสแกนรถ</p>
      </div>
      <Container component="main" maxWidth="xs" className="mobile-app">
        <Typography
          component="p"
          sx={{ color: 'primary.main', fontWeight: 800, fontSize: 22, mb: 8 }}
        >
          RBC GO
        </Typography>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 700 }}>
          ยินดีต้อนรับสู่ RBC GO
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          เติมเงินเข้าระบบ แล้วสแกนรถ เพื่อเริ่มใช้งานได้ทันที
        </Typography>
        <Box component="ol" sx={{ pl: 3, my: 5, '& li': { mb: 2 } }}>
          <li>เติมเงินเข้าบัตร / วอลเล็ต</li>
          <li>เลือกหรือสแกน QR บนรถ</li>
          <li>เดินทางและชำระค่าบริการตามระยะทาง</li>
        </Box>
        <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography component="h2" sx={{ fontWeight: 700 }}>
            กำลังเตรียมเปิดให้บริการ
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            ระบบเข้าสู่ระบบ เติมเงิน และเชื่อมต่อรถยังไม่เปิดใช้งาน
          </Typography>
          <Typography
            role="status"
            sx={{
              mt: 3,
              color: status.isError ? 'error.main' : 'primary.main',
            }}
          >
            {status.isPending
              ? 'กำลังตรวจสอบการเชื่อมต่อ…'
              : status.isError
                ? 'ยังเชื่อมต่อระบบไม่ได้'
                : 'เชื่อมต่อระบบสำเร็จ'}
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => void status.refetch()}
            disabled={status.isFetching}
          >
            ตรวจสอบการเชื่อมต่ออีกครั้ง
          </Button>
        </Box>
      </Container>
    </>
  );
}
