import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const responsiveFoundationSx = [
  {
    '@media (max-width: 767px)': {
      "html[lang='th'] & .fleet-intro h1": {
        fontSize: 'clamp(43px, 11.5vw, 72px)',
        lineHeight: '1.12',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      "html[lang='th'] & .page-intro h1, html[lang='th'] & .about-copy h1": {
        fontSize: 'clamp(38px, 9.7vw, 64px)',
        lineHeight: '1.2',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      "html[lang='th'] & .segmented button": {
        minWidth: '125px',
        fontSize: '12px',
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
  {
    '& .with-phones .journey-columns > article > p': {
      minHeight: '58px',
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .with-phones .journey-columns > article > p': {
        minHeight: '0 !important',
      },
      '& .with-phones .phone-art': {
        marginTop: '20px !important',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .page-content': {
        paddingTop: '30px',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .page-intro h1': {
        fontSize: 'clamp(90px, 9.4vw, 135px)',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .lower-home': {
        gap: '40px',
        paddingTop: '48px',
      },
      '& .home-hero + .lower-home': {
        marginTop: '0',
      },
      '& .vehicle-components': {
        paddingTop: '48px',
      },
      '& .about-hero + .about-benefits': {
        paddingTop: '48px',
      },
      '& .pricing-grid, & .how-details-heading': {
        marginTop: '48px',
      },
      '& .help-page .page-intro': {
        marginBottom: '48px',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .lower-home .ride-tile': {
        height: '350px',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .lower-home .journey-section': {
        padding: '35px 0 40px',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .lower-home .section-heading h2': {
        fontSize: '36px',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .faq-list details': {
        paddingTop: '18px',
        paddingBottom: '18px',
      },
    },
  },
  {
    '@media (min-width: 1101px)': {
      '& .about-lead': {
        maxWidth: '730px',
      },
    },
  },
  {
    '& .home-hero > video': { objectPosition: 'center 55%' },
    '& .motorcycle-hero > img': {
      objectFit: 'cover',
      objectPosition: 'center center',
    },
    '& .motorcycle-shade': {
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
    },
    '& .motorcycle-hero .fleet-intro': { maxWidth: '49%' },
    '& .caption-motorcycle': { left: '38px', right: '38px', maxWidth: '680px' },
    '& .motorcycle-tile-wrap': { gridTemplateColumns: 'minmax(0, 1fr)' },
    '& .lower-home .motorcycle-tile': {
      width: '100%',
      height: 'auto',
      aspectRatio: '16 / 9',
      background: '#080a08',
    },
    '& .lower-home .motorcycle-tile img': {
      objectFit: 'contain',
      objectPosition: 'center',
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .motorcycle-hero .fleet-intro': { maxWidth: '100%' },
      '& .caption-motorcycle': { left: '16px', right: '16px' },
      '& .lower-home .motorcycle-tile': {
        height: 'auto',
        aspectRatio: '16 / 9',
      },
      '& .home-hero-poster, & .home-hero > video': {
        objectPosition: '61% center',
      },
    },
  },
  {
    '@media (min-width: 768px) and (max-width: 1100px)': {
      '& .motorcycle-hero > img': {
        objectPosition: '80% center',
      },
    },
  },
  {
    '& .round-arrow:hover': { opacity: '0.86', background: 'var(--lime)' },
    '& .round-arrow.outline:hover': {
      opacity: '0.86',
      background: 'none',
      color: 'var(--lime)',
    },
  },
  {
    '& .home-hero h1, & .page-intro h1, & .about-copy h1, & .fleet-intro h1': {
      fontSize: 'clamp(58px, 5vw, 76px)',
      fontWeight: '600',
      lineHeight: '1.1',
      letterSpacing: '0.01em',
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .page-intro h1, & .about-copy h1, & .fleet-intro h1': {
        fontSize: 'clamp(44px, 13vw, 58px)',
        lineHeight: '1.08',
      },
    },
  },
  {
    "html[lang='th'] & .page-intro h1, html[lang='th'] & .about-copy h1, html[lang='th'] & .fleet-intro h1":
      {
        fontSize: 'clamp(58px, 5vw, 76px)',
        lineHeight: '1.1',
      },
  },
  {
    '@media (max-width: 767px)': {
      "html[lang='th'] & .page-intro h1, html[lang='th'] & .about-copy h1, html[lang='th'] & .fleet-intro h1":
        {
          fontSize: 'clamp(44px, 13vw, 58px)',
          lineHeight: '1.08',
        },
    },
  },
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
    '& .footer-brand-column': { minWidth: 0 },
    '& .footer-brand-column .brand': {
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center',
      gap: '16px',
      fontSize: 'clamp(22px, 1.8vw, 28px)',
    },
    '& .footer-brand-column .brand-logo': { width: '62px', height: '62px' },
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
    '& .footer-links a:hover::after': { width: '100%' },
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
      '& .site-footer': { paddingInline: '22px' },
      '& .footer-main': {
        gridTemplateColumns: '1fr',
        gap: '46px',
        paddingBlock: '45px',
      },
      '& .footer-links': {
        gridTemplateColumns: '1fr 1fr',
        gap: '38px 26px',
      },
      '& .footer-links nav:last-child': { gridColumn: '1 / -1' },
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
] satisfies SxProps<Theme>;
