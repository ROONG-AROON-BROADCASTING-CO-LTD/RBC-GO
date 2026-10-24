export const footerSx = [
  {
    '& .site-footer': {
      position: 'relative',
      maxWidth: '1600px',
      overflow: 'hidden',
      padding: '0 var(--footer-gutter, clamp(24px, 5vw, 82px))',
      background: '#000',
      color: '#fff',
    },
    '& .footer-main': {
      display: 'grid',
      gridTemplateColumns: 'minmax(260px, 0.86fr) minmax(560px, 1.34fr)',
      gap: 'clamp(56px, 9vw, 152px)',
      paddingBlock: 'clamp(68px, 7vw, 116px) clamp(54px, 5.5vw, 84px)',
    },
    '& .footer-brand-column': {
      minWidth: 0,
    },
    '& .footer-brand-column .brand': {
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center',
      gap: '16px',
      fontSize: 'clamp(22px, 1.8vw, 28px)',
    },
    '& .footer-brand-column .brand-logo': {
      width: '62px',
      height: '62px',
    },
    '& .footer-brand-column > p': {
      maxWidth: '330px',
      marginTop: '28px',
      color: 'rgb(245 245 240 / 68%)',
      fontSize: '15px',
      lineHeight: '1.75',
    },
    '& .footer-links': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 'clamp(26px, 3vw, 52px)',
    },
    '& .footer-links nav': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '13px',
    },
    '& .footer-links h3': {
      margin: '0 0 11px',
      color: 'var(--lime)',
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    '& .footer-links a, & .footer-links button': {
      position: 'relative',
      padding: 0,
      border: 0,
      background: 'none',
      color: 'rgb(245 245 240 / 68%)',
      fontSize: '14px',
      lineHeight: '1.35',
      textAlign: 'left',
      transition: 'color 200ms ease',
    },
    '& .footer-links a::after': {
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: 0,
      height: '1px',
      background: 'var(--lime)',
      content: "''",
      transition: 'width 220ms ease',
    },
    '& .footer-links a:hover, & .footer-links button:hover': {
      color: 'var(--lime)',
    },
    '& .footer-links a:hover::after': {
      width: '100%',
    },
    '& .footer-bottom': {
      position: 'relative',
      minHeight: '78px',
      marginTop: 0,
      paddingTop: 0,
      alignItems: 'center',
      borderTop: 0,
      color: 'rgb(245 245 240 / 43%)',
      fontSize: '11px',
    },
    '& .footer-bottom::before': {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '100vw',
      height: '1px',
      background: 'rgb(255 255 255 / 12%)',
      content: "''",
      transform: 'translateX(-50%)',
    },
  },
  {
    '@media (max-width: 1050px)': {
      '& .footer-main': {
        gridTemplateColumns: 'minmax(220px, 0.72fr) minmax(0, 1.28fr)',
        gap: 'clamp(40px, 6vw, 72px)',
      },
    },
  },
  {
    '@media (max-width: 600px)': {
      '& .site-footer': {
        paddingInline: '22px',
      },
      '& .footer-main': {
        gridTemplateColumns: '1fr',
        gap: '46px',
        paddingBlock: '45px',
      },
      '& .footer-links': {
        gridTemplateColumns: '1fr 1fr',
        gap: '38px 26px',
      },
      '& .footer-links nav:last-child': {
        gridColumn: '1 / -1',
      },
      '& .footer-bottom': {
        minHeight: 'auto',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '13px',
        paddingBlock: '25px',
      },
    },
  },
];
