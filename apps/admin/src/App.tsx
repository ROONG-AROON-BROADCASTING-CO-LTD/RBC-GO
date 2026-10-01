import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Alert, Box, Button, Container, Typography } from '@mui/material';
import { operationsSections } from '@stackbuild/management';
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
    <Container component="main" maxWidth="md" sx={{ py: 6 }}>
      <Typography color="primary" sx={{ fontWeight: 800 }}>
        RBC GO / ADMIN
      </Typography>
      <Typography component="h1" variant="h4" sx={{ mt: 3, mb: 2 }}>
        ศูนย์จัดการ RBC GO
      </Typography>
      <Alert severity="info">
        กำลังเตรียมระบบจัดการ — ยังไม่มีการเข้าถึงข้อมูลลูกค้าหรือคำสั่งควบคุมรถ
      </Alert>
      <Typography role="status" sx={{ my: 3 }}>
        {status.isPending
          ? 'กำลังตรวจสอบ API…'
          : status.isError
            ? 'ไม่สามารถเชื่อมต่อ API ได้'
            : 'API พร้อมใช้งาน · ค่าบริการตามระยะทาง'}
      </Typography>
      <Button
        variant="outlined"
        onClick={() => void status.refetch()}
        disabled={status.isFetching}
      >
        ตรวจสอบ API
      </Button>
      <Box
        component="ul"
        sx={{
          mt: 5,
          pl: 3,
          '& li': { py: 2, borderBottom: '1px solid #2B342D' },
        }}
      >
        {operationsSections.map((item) => (
          <Typography component="li" key={item.id}>
            {item.label} — อยู่ระหว่างเตรียมระบบ
          </Typography>
        ))}
      </Box>
    </Container>
  );
}
