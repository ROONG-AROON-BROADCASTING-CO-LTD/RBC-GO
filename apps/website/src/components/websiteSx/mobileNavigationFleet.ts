import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const mobileNavigationFleetSx = [
  {
    '@media (max-width: 1100px)': {
      "html[lang='th'] & .page-intro h1, html[lang='th'] & .about-copy h1": {
        fontSize: '75px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .home-hero': {
        height: '640px',
        minHeight: '640px',
        maxHeight: '640px',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        borderRadius: '0',
        alignItems: 'end',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .home-hero-overlay': {
        background:
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .home-hero-content': {
        justifyContent: 'end',
        width: '100%',
        transform: 'translateY(-48px)',
        padding: '0 24px 62px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .home-hero h1': {
        fontSize: 'clamp(42px, 10vw, 64px)',
        fontWeight: '600',
        lineHeight: '1.1',
        letterSpacing: '-0.05em',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .home-hero p': {
        fontSize: '15px',
        lineHeight: '1.65',
        marginTop: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .home-hero-actions': {
        marginTop: '26px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .site-header': {
        height: '104px',
        overflow: 'visible',
      },
      '& .site-header.is-scrolled': {
        overflow: 'hidden',
      },
      '& .site-header.is-scrolled.is-menu-open': {
        height: '72px',
        overflow: 'visible',
        '& .site-nav': {
          height: '72px',
          minHeight: '72px',
          paddingTop: '12px',
          paddingBottom: '12px',
          opacity: '1',
          pointerEvents: 'auto',
        },
      },
      '& .site-topbar': {
        paddingInline: '24px',
      },
      '& .site-topbar > span': {
        display: 'none',
      },
      '& .topbar-contact': {
        marginLeft: 'auto',
        gap: '12px',
      },
      '& .site-nav': {
        padding: '12px 24px',
        gap: '15px',
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
    '@media (max-width: 1100px)': {
      '& .desktop-nav, & .header-start': {
        display: 'none',
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
        fontSize: '12px',
        gap: '9px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .menu-toggle': {
        display: 'grid',
        placeItems: 'center',
        background: 'none',
        border: '1px solid #000',
        borderRadius: '10px',
        width: '40px',
        height: '40px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .menu-toggle .icon': {
        width: '23px',
        height: '23px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .mobile-menu': {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '74px',
        left: '15px',
        right: '15px',
        background: '#000',
        zIndex: '10',
        border: '1px solid #fff',
        borderRadius: '14px',
        padding: '20px',
      },
    },
  },
  {
    '@media (max-width: 1100px)': {
      '& .mobile-menu > a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginInline: '-20px',
        borderBottom: '1px solid var(--line)',
        padding: '15px 20px',
        fontSize: '17px',
        fontWeight: '600',
        '&[aria-current="page"]': {
          color: 'var(--lime)',
        },
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
      '& .page-content': {
        padding: '35px 0 45px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .page-intro h1': {
        fontSize: 'clamp(42px, 10.3vw, 76px)',
        lineHeight: '1.04',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .page-intro p': {
        fontSize: '15px',
        marginTop: '23px',
        lineHeight: '1.45',
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
      '& .fleet-hero': {
        margin: '0',
        minHeight: '860px',
        height: 'auto',
        borderRadius: '12px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .bike-photo': {
        width: '100%',
        height: '860px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .bike-photo img': {
        objectPosition: '68% center',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .scooter-photo': {
        width: '100%',
        height: '860px',
        opacity: '0',
        transition: 'opacity 0.25s',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .selected-scooter .scooter-photo': {
        opacity: '1',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .selected-scooter .bike-photo': {
        opacity: '0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .selected-scooter .scooter-photo img': {
        objectPosition: 'center',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-intro': {
        top: '24px',
        left: '20px',
        right: '20px',
        maxWidth: 'none',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-intro h1': {
        fontSize: 'clamp(53px, 14vw, 92px)',
        lineHeight: '0.98',
        maxWidth: '100%',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-intro > p': {
        fontSize: '15px',
        marginTop: '16px',
        maxWidth: '290px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .selected-scooter .fleet-intro': {
        background: '#080a089c',
        padding: '15px',
        borderRadius: '10px',
        left: '12px',
        right: '12px',
        top: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .selected-scooter .fleet-features': {
        display: 'none',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .segmented': {
        marginTop: '23px',
        padding: '4px',
        maxWidth: '100%',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .segmented button': {
        minWidth: '130px',
        padding: '12px 16px',
        fontSize: '13px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-features': {
        marginTop: '30px',
        gap: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-features li': {
        fontSize: '13px',
        gap: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-features .icon': {
        width: '29px',
        height: '29px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-caption': {
        bottom: '22px',
        left: '18px',
        right: '18px',
        width: 'auto',
        padding: '19px',
        gap: '15px',
        flexWrap: 'nowrap',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-caption h2': {
        fontSize: '22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-caption p': {
        fontSize: '14px',
        maxWidth: '230px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-caption .round-arrow': {
        width: '46px',
        height: '46px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .caption-scooter': {
        display: 'none',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .selected-scooter .caption-bike': {
        display: 'none',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .selected-scooter .caption-scooter': {
        display: 'flex',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .illustration-note': {
        padding: '15px 22px',
        fontSize: '10px',
        lineHeight: '1.5',
      },
    },
  },
] satisfies SxProps<Theme>;
