import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const tabletSx = [
  {
    "html[lang='th'] & h1, html[lang='th'] & h2, html[lang='th'] & h3": {
      letterSpacing: '0.01em',
    },
  },
  {
    "html[lang='th'] & .fleet-intro h1": {
      fontSize: 'clamp(70px, 8vw, 115px)',
      lineHeight: '1.14',
    },
  },
  {
    "html[lang='th'] & .page-intro h1, html[lang='th'] & .about-copy h1": {
      fontSize: '96px',
      lineHeight: '1.18',
    },
  },
  {
    "html[lang='th'] & .desktop-nav": {
      gap: 'clamp(20px, 2.3vw, 42px)',
    },
  },
  {
    "html[lang='th'] & .about-narrative": {
      maxWidth: '650px',
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .site-header': {
        height: '104px',
      },
      '& .site-nav': {
        paddingInline: 'clamp(24px, 5vw, 82px)',
        gap: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .desktop-nav': {
        fontSize: '14px',
        gap: '22px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .header-right': {
        gap: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .locale-switch': {
        fontSize: '14px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .header-start': {
        padding: '13px 20px',
        fontSize: '13px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .page-content': {
        paddingInline: '0',
      },
      '& .pricing-content': {
        paddingInline: '0',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-hero': {
        minHeight: '720px',
        height: 'calc(100svh - 72px)',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-intro': {
        left: '38px',
        top: '25px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-intro h1': {
        fontSize: '100px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-intro > p': {
        fontSize: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .segmented button': {
        minWidth: '135px',
        fontSize: '15px',
        padding: '12px 18px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-features': {
        marginTop: '45px',
        gap: '17px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-features li': {
        fontSize: '16px',
        gap: '18px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-features .icon': {
        width: '32px',
        height: '32px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-caption h2': {
        fontSize: '22px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .fleet-caption p': {
        fontSize: '15px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .caption-bike': {
        left: '20px',
        width: 'calc(73% - 40px)',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .caption-scooter': {
        right: '12px',
        width: 'calc(25.8% - 24px)',
        padding: '15px',
        flexWrap: 'wrap',
        gap: '12px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .caption-scooter .round-arrow': {
        margin: '0',
        width: '43px',
        height: '43px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .page-intro h1': {
        fontSize: '90px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .page-intro p': {
        fontSize: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .journey-columns p': {
        fontSize: '16px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .with-phones .journey-columns': {
        gap: '25px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .with-phones .journey-columns article': {
        paddingRight: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .with-phones .journey-title h3': {
        fontSize: '25px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .number': {
        width: '40px',
        height: '40px',
        fontSize: '23px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .phone-art': {
        height: 'auto',
        borderRadius: '35px 35px 0 0',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .pricing-grid': {
        gridTemplateColumns: '55% 45%',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .pricing-list': {
        paddingRight: '30px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .pricing-list article': {
        gap: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .pricing-list h3': {
        fontSize: '22px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .pricing-list p': {
        fontSize: '16px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .rate-notice': {
        marginLeft: '30px',
        padding: '28px',
        gap: '16px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .rate-notice > .icon': {
        width: '42px',
        height: '42px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .rate-notice h2': {
        fontSize: '29px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .rate-notice p': {
        fontSize: '16px',
        marginTop: '24px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-hero': {
        height: '950px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-copy': {
        paddingInline: '55px',
        maxWidth: '900px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-copy h1': {
        fontSize: '90px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-lead': {
        fontSize: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-narrative': {
        maxWidth: '480px',
        marginTop: '65px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-narrative p': {
        fontSize: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-benefits': {
        padding: '40px 0',
        gap: '22px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-benefits article': {
        gap: '18px',
        padding: '26px 24px 28px',
        minHeight: '0',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-benefit-icon-motion': {
        width: '42px',
        height: '42px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-benefits h3': {
        fontSize: '18px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .about-benefits p': {
        fontSize: '15px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .section-heading h2': {
        fontSize: '34px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .ride-tile': {
        height: '330px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .journey-title': {
        gap: '12px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .lower-home .journey-title h3': {
        fontSize: '19px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .lower-home .animated-journey-icon': {
        right: '16px',
        bottom: '16px',
        width: '54px',
        height: '54px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .lower-home .journey-columns p': {
        paddingLeft: '50px',
        fontSize: '14px',
      },
    },
  },
  {
    '@media (min-width: 768px) and (max-width: 850px)': {
      '& .lower-home .journey-columns': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '16px',
      },
      '& .lower-home .journey-columns article': {
        padding: '24px',
        minHeight: '220px',
      },
      '& .lower-home .journey-columns article:last-child': {
        gridColumn: '1 / -1',
      },
      '& .lower-home .journey-title': {
        gap: '10px',
      },
      '& .lower-home .journey-title h3': {
        fontSize: 'clamp(20px, 2.8vw, 24px)',
      },
      '& .lower-home .journey-columns p': {
        paddingRight: '74px',
        fontSize: '15px',
        maxWidth: 'none',
        lineHeight: '1.5',
      },
      '& .lower-home .animated-journey-icon': {
        right: '18px',
        bottom: '18px',
        width: '58px',
        height: '58px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .closing-cta': {
        padding: '40px 45px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .closing-cta h2': {
        fontSize: '36px',
      },
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
      '& .footer-grid': {
        gap: '25px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .footer-grid nav a, & .footer-grid nav button': {
        fontSize: '13px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .footer-grid h3': {
        fontSize: '16px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .footer-grid p': {
        fontSize: '14px',
      },
    },
  },
] satisfies SxProps<Theme>;
