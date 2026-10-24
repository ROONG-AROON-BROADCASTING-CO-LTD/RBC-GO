import { ImageResponse } from 'next/og';
export const alt = 'RBC GO vehicle rentals by road, sea and air';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 90,
        width: '100%',
        height: '100%',
        background: '#050706',
        color: '#7CFF00',
        fontSize: 112,
        fontWeight: 800,
      }}
    >
      <div>RBC GO</div>
      <div style={{ color: '#FFFFFF', fontSize: 38, marginTop: 32 }}>
        Your journey. Your choice. Road. Sea. Sky.
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 26, marginTop: 24 }}>
        Electric motorcycles · Cars · Yachts · Aircraft
      </div>
    </div>,
    size,
  );
}
