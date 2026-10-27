export const sharedSx = [
  {
    '& :is(p, a, button, label, summary, li, h1, h2, h3, .eyebrow)': {
      wordBreak: 'normal',
      overflowWrap: 'normal',
      hyphens: 'none',
    },
    '& :is(.button)': {
      whiteSpace: 'normal',
    },
  },
  {
    '& .icon': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '26px',
      height: '26px',
      flexShrink: '0',
      verticalAlign: 'middle',
    },
  },
  {
    '& .animated-website-icon svg': {
      display: 'block',
      width: '100%',
      height: '100%',
      overflow: 'visible',
    },
  },
  {
    '& .animated-arrow': {
      background: 'none',
      maskImage: 'none',
      WebkitMaskImage: 'none',
    },
  },
  {
    '& .animated-arrow svg': {
      display: 'block',
      width: '100%',
      height: '100%',
      transition: 'transform 220ms ease',
    },
    '& .button .animated-arrow': {
      display: 'inline-flex',
      flex: 'none',
      lineHeight: '0',
      color: 'inherit',
      opacity: '1',
      visibility: 'visible',
    },
    '& .button:hover .animated-arrow': {
      opacity: '1',
      visibility: 'visible',
    },
  },
  {
    '& main': {
      maxWidth: 'none',
      margin: '0',
      paddingInline: 'clamp(24px, 5vw, 82px)',
    },
    '& .site-footer': {
      maxWidth: '1440px',
      margin: 'auto',
    },
  },
  {
    '& .brand': {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '0.92',
      letterSpacing: '0.05em',
      whiteSpace: 'nowrap',
    },
  },
  {
    '& .brand-name': {
      display: 'inline-block',
      fontFamily: 'var(--font-inter), Arial, sans-serif',
    },
  },
  {
    '& .brand-logo': {
      display: 'block',
      width: '42px',
      height: '42px',
      objectFit: 'cover',
      borderRadius: '50%',
    },
  },
  {
    '& .button': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      border: '0',
      borderRadius: '50px',
      padding: '17px 29px',
      fontSize: '17px',
      fontWeight: '600',
      transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
    },
  },
  {
    '& .button.lime': {
      background: 'var(--lime)',
      color: '#0b1003',
    },
  },
  {
    '& .button .icon': {
      width: '19px',
      height: '19px',
    },
  },
  {
    '& .button:hover': {
      boxShadow: '0 8px 20px rgb(0 0 0 / 18%)',
    },
    '& .button.lime:hover': {
      background: '#8be63b',
    },
  },
  {
    '& .eyebrow': {
      display: 'block',
      color: 'var(--lime)',
      fontSize: '17px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: '28px',
    },
  },
  {
    '& .icon-button': {
      border: '0',
      background: 'none',
      display: 'inline-grid',
      placeItems: 'center',
      width: '44px',
      height: '44px',
    },
  },
  {
    '& .site-footer': {
      padding: '45px 65px 25px',
    },
  },
  {
    '& .footer-bottom': {
      borderTop: '1px solid var(--line)',
      paddingTop: '20px',
      marginTop: '36px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      color: '#92988a',
    },
  },
  {
    '& .info-dialog': {
      background: '#171b14',
      color: 'white',
      border: '1px solid #626e52',
      borderRadius: '20px',
      width: 'min(560px, calc(100vw - 40px))',
      padding: '48px 35px',
    },
  },
  {
    '& .info-dialog::backdrop': {
      background: '#000b',
    },
  },
  {
    '& .info-dialog h2': {
      fontSize: '32px',
      lineHeight: '1.15',
    },
  },
  {
    '& .info-dialog p': {
      margin: '24px 0 28px',
      fontSize: '17px',
    },
  },
  {
    '& .dialog-close': {
      position: 'absolute',
      right: '15px',
      top: '10px',
    },
  },
  {
    "html[lang='th'] & h1, html[lang='th'] & h2, html[lang='th'] & h3": {
      letterSpacing: '0.01em',
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .site-footer': {
        paddingInline: '40px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .brand': {
        gap: '10px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .brand-logo': {
        width: '42px',
        height: '42px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .button': {
        padding: '14px 22px',
        fontSize: '14px',
        gap: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .button .icon': {
        width: '21px',
        height: '21px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .eyebrow': {
        fontSize: '11px',
        marginBottom: '22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .site-footer': {
        padding: '35px 22px 24px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-bottom': {
        marginTop: '30px',
        fontSize: '10px',
        gap: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .info-dialog': {
        padding: '44px 25px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .info-dialog h2': {
        fontSize: '27px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .info-dialog p': {
        fontSize: '15px',
      },
    },
  },
  {
    '@media (prefers-reduced-motion: reduce)': {
      '& html': {
        scrollBehavior: 'auto',
      },
    },
  },
  {
    '@media (prefers-reduced-motion: reduce)': {
      '& *, & *:before, & *:after': {
        transition: 'none !important',
      },
    },
  },
];
