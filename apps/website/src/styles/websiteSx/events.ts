export const eventsSx = [
  {
    '& .event-page': {
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: 'clamp(108px, 12vw, 168px) clamp(20px, 6vw, 88px) 0',
    },
    '& .event-detail-hero': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
      alignItems: 'center',
      gap: 'clamp(28px, 6vw, 96px)',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: 'clamp(70px, 10vw, 136px)',
    },
    '& .event-detail-copy time': {
      display: 'block',
      marginTop: '16px',
      color: 'var(--lime)',
      fontSize: '14px',
      fontWeight: 700,
    },
    '& .event-detail-copy h1': {
      maxWidth: '680px',
      textWrap: 'balance',
      wordBreak: 'normal',
      overflowWrap: 'normal',
      margin: '16px 0',
      fontSize: 'clamp(58px, 5vw, 76px)',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '0.01em',
    },
    '& .event-detail-copy p, & .event-detail-gallery-heading p': {
      maxWidth: '540px',
      margin: 0,
      color: 'var(--muted)',
      fontSize: '17px',
      lineHeight: 1.65,
    },
    '& .event-detail-hero figure': {
      aspectRatio: '4 / 3',
      margin: 0,
      overflow: 'hidden',
      borderRadius: '18px',
      background: '#111510',
    },
    '& .event-detail-hero figure img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '& .event-detail-gallery': {
      maxWidth: '1600px',
      margin: '0 auto',
      padding: 'clamp(46px, 7vw, 96px) 0 clamp(88px, 12vw, 168px)',
      borderTop: '1px solid #2a3027',
    },
    '& .event-detail-gallery-heading': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: '28px',
      marginBottom: '42px',
    },
    '& .event-detail-gallery-heading h2': {
      gridColumn: '1 / -1',
      maxWidth: '980px',
      margin: '8px 0 0',
      fontSize: 'clamp(32px, 4vw, 64px)',
      fontWeight: 700,
      lineHeight: 1.04,
      letterSpacing: '-0.05em',
    },
    '& .event-detail-gallery-grid': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '14px',
    },
    '& .event-detail-gallery-grid figure': {
      aspectRatio: '4 / 3',
      margin: 0,
      overflow: 'hidden',
      borderRadius: '10px',
      background: '#111510',
      contentVisibility: 'auto',
      containIntrinsicSize: '340px',
    },
    '& .event-detail-gallery-grid img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
    '& .event-detail-gallery-grid figure:hover img': {
      transform: 'scale(1.035)',
    },
    '@media (max-width: 900px)': {
      '& .event-detail-hero': {
        gridTemplateColumns: '1fr',
      },
      '& .event-detail-gallery-grid': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
    },
    '@media (min-width: 768px)': {
      '& .event-detail-copy h1': {
        fontSize: 'clamp(44px, 3.8vw, 56px)',
      },
    },
    '@media (max-width: 767px)': {
      '& .event-detail-copy h1': {
        fontSize: 'clamp(28px, 7.3vw, 36px)',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '0.005em',
      },
    },
    '@media (max-width: 600px)': {
      '& .event-page': {
        padding: '104px 20px 0',
      },
      '& .event-detail-hero figure': {
        aspectRatio: '4 / 3',
      },
      '& .event-detail-gallery-heading': {
        gridTemplateColumns: '1fr',
        gap: '16px',
      },
      '& .event-detail-gallery-heading h2': {
        gridColumn: 'auto',
      },
      '& .event-detail-gallery-grid': {
        gridTemplateColumns: '1fr',
        gap: '12px',
      },
    },
  },
];
