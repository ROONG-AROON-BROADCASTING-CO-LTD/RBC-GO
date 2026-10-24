export const refinementsSx = [
  {
    '& .button': {
      fontSize: '16px',
      lineHeight: '1.35',
    },
    '& .eyebrow': {
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '1.35',
    },
    '& .footer-brand-column > p, & .footer-links a, & .footer-links button': {
      lineHeight: '1.6',
    },
    '& .footer-brand-column > p': {
      fontSize: '16px',
    },
    '& .footer-links h3': {
      fontSize: '15px',
      fontWeight: '600',
      lineHeight: '1.35',
    },
    '& .footer-links a, & .footer-links button': {
      fontSize: '15px',
    },
    '& .footer-bottom': {
      fontSize: '12px',
      lineHeight: '1.5',
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .button': {
        fontSize: '15px',
      },
      '& .footer-brand-column > p, & .footer-links a, & .footer-links button': {
        fontSize: '15px',
      },
      '& .footer-links h3': {
        fontSize: '15px',
      },
      '& .footer-bottom': {
        fontSize: '12px',
        lineHeight: '1.5',
      },
    },
  },
  {
    '& .button, & .icon-button': {
      transition:
        'transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease',
    },
    '& .button:hover, & .icon-button:hover': {
      transform: 'translateY(-2px)',
    },
    '& .button:active, & .icon-button:active': {
      transform: 'translateY(0) scale(0.96)',
    },
    '& .eyebrow': {
      fontSize: '15px !important',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '& .button:hover, & .icon-button:hover': {
        transform: 'none',
      },
    },
  },
];
