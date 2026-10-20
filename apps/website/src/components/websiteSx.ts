// Public website styles owned by the website component boundary.
// Keep the ordered sx array: later responsive rules intentionally override earlier rules.
import type { SxProps, Theme } from '@mui/material/styles';

export const websiteSx: SxProps<Theme> = [
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
    '& .button .animated-arrow, & .inline-link .animated-arrow': {
      display: 'inline-flex',
      flex: 'none',
      lineHeight: '0',
      color: 'inherit',
      opacity: '1',
      visibility: 'visible',
    },
    '& .button:hover .animated-arrow, & .inline-link:hover .animated-arrow': {
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
    '& .site-header, & .site-footer': {
      maxWidth: '1440px',
      margin: 'auto',
    },
    '& .site-header': {
      maxWidth: 'none',
      width: '100%',
      margin: '0',
      marginBottom: '-104px',
    },
  },
  {
    '& .site-header': {
      position: 'sticky',
      top: '0',
      zIndex: '40',
      height: '104px',
      padding: '0',
      background: 'transparent',
      overflow: 'hidden',
      transition:
        'height 160ms ease, background-color 160ms ease, backdrop-filter 160ms ease',
    },
  },
  {
    '& .site-topbar': {
      height: '32px',
      padding: '0 clamp(24px, 5vw, 82px)',
      background: '#000',
      borderBottom: '1px solid rgb(255 255 255 / 12%)',
      color: 'rgb(255 255 255 / 68%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '10px',
      lineHeight: '1',
      letterSpacing: '0.025em',
      transition:
        'height 160ms ease, opacity 120ms ease, border-color 120ms ease, padding 160ms ease',
    },
    '& .topbar-contact': {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      '& a': { color: '#f2f0e9', whiteSpace: 'nowrap' },
      '& img': {
        display: 'block',
        width: '15px',
        height: '15px',
        objectFit: 'contain',
      },
    },
    '& .site-nav': {
      height: '72px',
      padding: '12px clamp(24px, 5vw, 82px)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
      alignItems: 'center',
      gap: '30px',
      position: 'relative',
    },
  },
  {
    '& .site-header.is-scrolled': {
      height: '72px',
      background: 'rgb(0 0 0 / 96%)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      '& .site-topbar': {
        height: '0',
        minHeight: '0',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: '0',
        borderBottomColor: 'transparent',
        pointerEvents: 'none',
      },
      '& .site-nav': {
        height: '72px',
      },
      '& .locale-switch, & .menu-toggle': {
        borderColor: '#fff',
      },
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
    '& .desktop-nav': {
      display: 'flex',
      gap: 'clamp(20px, 2.3vw, 42px)',
      fontSize: '15px',
      fontWeight: '600',
      gridColumn: '2',
      whiteSpace: 'nowrap',
    },
  },
  {
    '& .desktop-nav a': {
      position: 'relative',
      color: '#ddd',
      transition: 'color 200ms ease',
    },
    '& .desktop-nav a::after': {
      position: 'absolute',
      bottom: '-4px',
      left: '0',
      width: '0',
      height: '1px',
      background: 'var(--lime)',
      content: "''",
      transition: 'width 220ms ease',
    },
  },
  {
    '& .desktop-nav a:hover, & .desktop-nav a[aria-current]': {
      color: 'var(--lime)',
    },
    '& .desktop-nav a:hover': {
      color: 'var(--lime)',
    },
    '& .desktop-nav a:hover::after, & .desktop-nav a[aria-current]::after': {
      width: '100%',
    },
  },
  {
    '& .header-right': {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      gridColumn: '3',
      justifySelf: 'end',
    },
  },
  {
    '& .locale-switch': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      width: '71px',
      boxSizing: 'border-box',
      height: '40px',
      minHeight: '40px',
      padding: '0 12px',
      border: '1px solid #000',
      borderRadius: '10px',
      background: 'rgb(255 255 255 / 3%)',
      fontFamily: 'var(--font-ibm-plex-sans-thai), sans-serif',
      fontSize: '12px',
      fontWeight: '600',
      color: '#9e9f98',
      cursor: 'pointer',
      lineHeight: '1',
      fontVariantNumeric: 'tabular-nums',
      transition:
        'background 180ms ease,\n    border-color 180ms ease,\n    color 180ms ease',
    },
  },
  {
    '@media (max-width: 600px)': {
      '& .locale-switch': {
        width: '71px',
        height: '40px',
        minHeight: '40px',
        padding: '0 12px',
      },
    },
  },
  {
    '& .locale-switch span': {
      display: 'inline-block',
      width: '18px',
      textAlign: 'center',
      fontSize: '12px',
      lineHeight: '12px',
    },
  },
  {
    '& .locale-switch .active': {
      color: 'white',
      fontWeight: '600',
    },
  },
  {
    '& .locale-switch i': {
      color: '#51554c',
      fontStyle: 'normal',
      fontSize: '12px',
      lineHeight: '12px',
    },
  },
  {
    '& .locale-switch:hover': {
      borderColor: 'white',
      background: 'white',
      color: 'rgb(23 20 17 / 56%)',
    },
  },
  {
    '& .locale-switch:hover .active': {
      color: '#171411',
    },
  },
  {
    '& .locale-switch:hover i': {
      color: 'rgb(23 20 17 / 38%)',
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
    '& .button.dark': {
      background: '#080b06',
      color: 'var(--lime)',
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
    '& .button.dark:hover': {
      background: '#040603',
    },
    '& .button.lime:hover': {
      background: '#8be63b',
    },
  },
  {
    '& .header-start': {
      minHeight: '40px',
      padding: '9px 16px',
      borderRadius: '10px',
      fontSize: '13px',
    },
    '& .site-header:has(.header-start:hover), & .site-header:has(.header-start:focus-visible)':
      {
        overflow: 'visible',
      },
  },
  {
    '& .menu-toggle, & .mobile-menu': {
      display: 'none',
    },
  },
  {
    '& .page-intro h1': {
      fontSize: 'clamp(72px, 8.35vw, 120px)',
      fontWeight: '600',
      lineHeight: '1.04',
      letterSpacing: '-0.048em',
    },
  },
  {
    '& .page-intro p': {
      fontSize: 'clamp(16px, 1.25vw, 20px)',
      color: '#f0f1eb',
      marginTop: '30px',
      lineHeight: '1.75',
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
    '& .page-content': {
      padding: '52px 0 65px',
    },
  },
  {
    '& .home-hero': {
      position: 'relative',
      height: 'clamp(640px, calc(100svh - 104px), 940px)',
      minHeight: '620px',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      marginRight: 'calc(50% - 50vw)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'stretch',
      background: '#080a08',
    },
  },
  {
    '& .home-hero-poster': {
      objectFit: 'cover',
      objectPosition: 'center 55%',
      zIndex: '0',
    },
    '& .home-hero > video': {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 55%',
      zIndex: '1',
      opacity: '0',
      transition: 'opacity 180ms ease-out',
    },
    '& .home-hero > video.is-ready': {
      opacity: '1',
    },
  },
  {
    '& .home-hero-overlay': {
      position: 'absolute',
      inset: '0',
      zIndex: '2',
      background:
        'linear-gradient(90deg, rgb(0 0 0 / 76%) 0%, rgb(0 0 0 / 49%) 37%, rgb(0 0 0 / 8%) 75%), linear-gradient(0deg, rgb(0 0 0 / 20%), transparent 40%)',
    },
  },
  {
    '& .home-hero-content': {
      position: 'relative',
      zIndex: '3',
      width: 'min(760px, 75vw)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '224px 0 0 clamp(24px, 5vw, 82px)',
    },
  },
  {
    '& .home-hero h1': {
      fontSize: 'clamp(58px, 5vw, 76px)',
      fontWeight: '600',
      lineHeight: '1.1',
      letterSpacing: '0.01em',
    },
  },
  {
    '& .home-hero p': {
      maxWidth: '515px',
      marginTop: '30px',
      fontSize: 'clamp(16px, 1.25vw, 20px)',
      lineHeight: '1.75',
    },
  },
  {
    '& .home-hero-actions': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginTop: '38px',
    },
  },
  {
    '& .home-hero-actions .button': {
      minWidth: '0',
      minHeight: '52px',
      justifyContent: 'flex-start',
      gap: '12px',
      padding: '0 23px',
      borderRadius: '10px',
      fontSize: '14px',
    },
    '& .home-hero-actions .button.dark': {
      border: '0',
      background: '#080b06',
    },
  },
  {
    '& .round-arrow': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      height: '60px',
      background: 'var(--lime)',
      color: '#101707',
      borderRadius: '50%',
      border: '0',
      flexShrink: '0',
    },
  },
  {
    '& .round-arrow .icon': {
      width: '29px',
      height: '29px',
    },
  },
  {
    '& .round-arrow:hover': {
      background: '#ebffa4',
    },
  },
  {
    '& .fleet-hero': {
      position: 'relative',
      height: 'calc(100svh - 72px)',
      minHeight: '740px',
      maxHeight: '1328px',
      margin: '0',
      overflow: 'hidden',
      borderRadius: '12px',
    },
  },
  {
    '& .fleet-photo': {
      position: 'absolute',
      top: '0',
      bottom: '0',
      overflow: 'hidden',
      borderRadius: '12px',
    },
  },
  {
    '& .fleet-photo img': {
      objectFit: 'cover',
    },
  },
  {
    '& .bike-photo': {
      left: '0',
      width: '73%',
      background: '#0b0d0a',
    },
  },
  {
    '& .bike-photo img': {
      objectPosition: '72% center',
    },
  },
  {
    '& .scooter-photo': {
      right: '0',
      width: '25.8%',
    },
  },
  {
    '& .scooter-photo img': {
      objectPosition: '55% center',
    },
  },
  {
    '& .fleet-intro': {
      position: 'absolute',
      zIndex: '1',
      top: '30px',
      left: '58px',
      maxWidth: '65%',
    },
  },
  {
    '& .fleet-intro h1': {
      fontSize: 'clamp(85px, 9.8vw, 141px)',
      lineHeight: '0.97',
      letterSpacing: '-0.055em',
      maxWidth: '850px',
    },
  },
  {
    '& .fleet-intro > p': {
      fontSize: 'clamp(16px, 1.25vw, 20px)',
      marginTop: '30px',
      color: 'white',
      lineHeight: '1.75',
    },
  },
  {
    '& .segmented': {
      display: 'inline-flex',
      border: '1px solid #62675b',
      borderRadius: '50px',
      padding: '5px',
      marginTop: '30px',
      background: '#080a08b3',
    },
  },
  {
    '& .segmented button': {
      border: '0',
      borderRadius: '50px',
      background: 'none',
      minWidth: '173px',
      padding: '15px 22px',
      fontSize: '18px',
    },
  },
  {
    "& .segmented button[aria-pressed='true']": {
      background: 'var(--lime)',
      color: '#080a08',
      fontWeight: '600',
    },
  },
  {
    '& .fleet-features': {
      padding: '0',
      margin: '65px 0 0',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '23px',
    },
  },
  {
    '& .fleet-features li': {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      fontSize: '19px',
    },
  },
  {
    '& .fleet-features .icon': {
      color: 'var(--lime)',
      width: '39px',
      height: '39px',
    },
  },
  {
    '& .fleet-caption': {
      position: 'absolute',
      bottom: '30px',
      zIndex: '1',
      display: 'flex',
      alignItems: 'center',
      gap: '25px',
      background: '#080a08bf',
      padding: '20px',
      borderRadius: '8px',
    },
  },
  {
    '& .caption-bike': {
      left: '38px',
      width: 'calc(73% - 72px)',
    },
  },
  {
    '& .caption-scooter': {
      right: '20px',
      width: 'calc(25.8% - 40px)',
    },
  },
  {
    '& .fleet-caption > div': {
      maxWidth: '370px',
    },
  },
  {
    '& .fleet-caption h2': {
      fontSize: '26px',
    },
  },
  {
    '& .fleet-caption p': {
      fontSize: '19px',
      marginTop: '8px',
      color: '#f5f7ef',
    },
  },
  {
    '& .fleet-caption .round-arrow': {
      marginLeft: 'auto',
    },
  },
  {
    '& .caption-scooter .round-arrow': {
      width: '52px',
      height: '52px',
    },
  },
  {
    '& .illustration-note': {
      fontSize: '12px',
      padding: '16px 65px',
      color: '#92988a',
    },
  },
  {
    '& .mobile-login': {
      display: 'inline-flex',
      background: 'var(--lime)',
      color: '#101600',
      fontWeight: '600',
      borderRadius: '50px',
      padding: '14px 24px',
      marginTop: '20px',
    },
  },
  {
    '& .fleet-details': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '35px 0',
      background: 'var(--surface)',
      margin: '20px 0',
    },
  },
  {
    '& .fleet-details h2': {
      fontSize: '32px',
      marginBottom: '15px',
    },
  },
  {
    '& .fleet-details .eyebrow': {
      fontSize: '13px',
      marginBottom: '12px',
    },
  },
  {
    '& .fleet-details p': {
      maxWidth: '720px',
    },
  },
  {
    '& .vehicle-components': {
      width: '100%',
      margin: '0',
      padding: '96px 0 36px',
    },
  },
  {
    '& .vehicle-components-heading': {
      maxWidth: '760px',
      marginBottom: '38px',
    },
  },
  {
    '& .vehicle-components-heading .eyebrow': {
      marginBottom: '16px',
      fontSize: '15px',
    },
  },
  {
    '& .vehicle-components-heading h2': {
      fontSize: '36px',
      fontWeight: '600',
      lineHeight: '1.08',
      letterSpacing: '-0.045em',
    },
  },
  {
    '& .vehicle-components-heading p': {
      marginTop: '18px',
      maxWidth: '650px',
      color: '#bec4b7',
      fontSize: '18px',
      lineHeight: '1.65',
    },
  },
  {
    '& .vehicle-components-image': {
      margin: '0',
      overflow: 'hidden',
      borderRadius: '16px',
      border: '1px solid #2a3027',
      background: '#090c0b',
    },
  },
  {
    '& .vehicle-components-image img': {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
  },
  {
    '& .vehicle-components-list': {
      listStyle: 'none',
      padding: '0',
      margin: '34px 0 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      borderTop: '1px solid #2a3027',
      borderLeft: '1px solid #2a3027',
      borderRight: '1px solid #2a3027',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        right: '33.333%',
        bottom: '0',
        height: '138px',
        borderLeft: '1px solid #2a3027',
        pointerEvents: 'none',
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        borderBottom: '1px solid #2a3027',
        pointerEvents: 'none',
      },
    },
  },
  {
    '& .vehicle-components-list li': {
      minHeight: '138px',
      padding: '25px 22px',
      borderRight: '1px solid #2a3027',
      borderBottom: '1px solid #2a3027',
    },
  },
  {
    '& .vehicle-component-content': {
      display: 'flex',
      gap: '16px',
    },
  },
  {
    '& .vehicle-components-list li:nth-child(3n)': {
      borderRight: '0',
    },
  },
  {
    '& .vehicle-component-content > span': {
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: 'var(--lime)',
      color: '#0c1105',
      fontFamily: 'var(--font-inter), sans-serif',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '0.08em',
    },
  },
  {
    '& .vehicle-components-list h3': {
      fontSize: '20px',
      lineHeight: '1.25',
    },
  },
  {
    '& .vehicle-components-list p': {
      marginTop: '7px',
      color: '#aeb5a6',
      fontSize: '15px',
      lineHeight: '1.55',
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
    '& .lower-home': {
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '60px 0 0',
    },
    '& .home-hero + .lower-home': {
      marginTop: '40px',
    },
  },
  {
    '& .section-heading': {
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-between',
      gap: '25px',
      marginBottom: '30px',
    },
  },
  {
    '& .section-heading .eyebrow': {
      marginBottom: '14px',
      fontSize: '15px',
    },
  },
  {
    '& .section-heading h2': {
      fontSize: '42px',
      fontWeight: '600',
      lineHeight: '1.12',
    },
  },
  {
    '& .section-heading p': {
      fontSize: '17px',
      marginTop: '12px',
    },
  },
  {
    '& .inline-link': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minWidth: '0',
      padding: '0',
      borderRadius: '0',
      gap: '18px',
      color: 'var(--lime)',
      fontSize: '16px',
      textDecoration: 'none',
      background: 'transparent',
    },
  },
  {
    '& .inline-link .round-arrow': {
      width: '19px',
      height: '19px',
      background: 'transparent',
      color: 'currentColor',
    },
  },
  {
    '& .ride-tiles': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '22px',
    },
  },
  {
    '& .ride-tile': {
      display: 'block',
      position: 'relative',
      height: '400px',
      borderRadius: '13px',
      overflow: 'hidden',
    },
  },
  {
    '& .ride-tile img': {
      objectFit: 'cover',
      objectPosition: 'center 70%',
      transition: 'transform 0.3s',
    },
  },
  {
    '& .ride-tile:hover img': {
      transform: 'scale(1.025)',
    },
  },
  {
    '& .lower-home .motorcycle-tile:hover .tile-caption .round-arrow': {
      background: 'var(--lime)',
      borderColor: 'var(--lime)',
      color: '#0c1105',
    },
  },
  {
    '& .ride-tile.scooter img': {
      objectPosition: '50% 60%',
    },
  },
  {
    '& .tile-caption': {
      position: 'absolute',
      left: '20px',
      right: '20px',
      bottom: '20px',
      padding: '20px',
      background: '#080a08bc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '25px',
      borderRadius: '7px',
      opacity: '0',
      transform: 'translateY(14px)',
      transition:
        'opacity 240ms ease, transform 240ms cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none',
    },
  },
  {
    '& .tile-caption h3': {
      fontSize: '23px',
    },
  },
  {
    '& .tile-caption p': {
      fontSize: '16px',
      color: 'white',
      maxWidth: '350px',
      marginTop: '6px',
    },
  },
  {
    '& .tile-caption .round-arrow': {
      width: '45px',
      height: '45px',
    },
    '& .lower-home .motorcycle-tile:hover .tile-caption, & .lower-home .motorcycle-tile:focus-visible .tile-caption':
      {
        opacity: '1',
        transform: 'translateY(0)',
      },
  },
  {
    '& .round-arrow.outline': {
      border: '1px solid var(--lime)',
      background: 'none',
      color: 'var(--lime)',
    },
  },
  {
    '& .journey-section': {
      padding: '50px 0 60px',
    },
  },
  {
    '& .journey-columns': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '26px',
    },
  },
  {
    '& .journey-columns article': {
      minWidth: '0',
      border: '1px solid var(--line)',
      borderRadius: '20px',
      padding: '34px 38px 38px',
      minHeight: '230px',
    },
  },
  {
    '& .journey-title': {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
  },
  {
    '& .number': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
      background: 'var(--lime)',
      color: '#0c1105',
      fontSize: '26px',
      fontWeight: '600',
      borderRadius: '50%',
      flexShrink: '0',
    },
  },
  {
    '& .animated-journey-icon': {
      color: 'var(--lime)',
      width: '49px',
      height: '49px',
      flexShrink: '0',
    },
    '& .animated-journey-icon svg': {
      display: 'block',
      width: '100%',
      height: '100%',
    },
  },
  {
    '& .journey-title h3': {
      fontSize: '28px',
      letterSpacing: '-0.025em',
    },
  },
  {
    '& .journey-columns p': {
      fontSize: '19px',
      marginTop: '17px',
      maxWidth: '340px',
      lineHeight: '1.4',
      color: '#e2e4dc',
    },
  },
  {
    '& .lower-home .journey-columns p': {
      paddingLeft: '63px',
      fontSize: '16px',
    },
  },
  {
    '& .lower-home .journey-columns': {
      gap: '18px',
    },
  },
  {
    '& .lower-home .journey-columns article': {
      border: '1px solid var(--line)',
      borderRadius: '14px',
      padding: '25px',
      minHeight: '0',
      position: 'relative',
      overflow: 'visible',
    },
  },
  {
    '& .lower-home .journey-columns article:last-child': {
      border: '1px solid var(--line)',
      paddingRight: '25px',
    },
  },
  {
    '& .lower-home .journey-columns p': {
      paddingLeft: '0',
      paddingRight: '82px',
    },
  },
  {
    '& .lower-home .journey-title .number': {
      width: '39px',
      height: '39px',
      fontSize: '22px',
    },
  },
  {
    '& .lower-home .journey-title h3': {
      fontSize: '23px',
    },
  },
  {
    '& .lower-home .animated-journey-icon': {
      position: 'absolute',
      right: '18px',
      bottom: '18px',
      zIndex: '1',
      width: '64px',
      height: '64px',
      pointerEvents: 'none',
    },
  },
  {
    '& .with-phones': {
      marginTop: '62px',
    },
  },
  {
    '& .with-phones .journey-columns': {
      gap: '42px',
    },
  },
  {
    '& .with-phones .journey-columns article': {
      padding: '25px',
    },
  },
  {
    '& .with-phones .journey-title h3': {
      fontSize: '30px',
    },
  },
  {
    '& .phone-art': {
      width: '100%',
      marginTop: '36px',
      overflow: 'visible',
      height: 'auto',
      borderRadius: '45px 45px 0 0',
    },
  },
  {
    '& .phone-art img': {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
  },
  {
    '& .demo-note': {
      fontSize: '12px !important',
      marginTop: '18px',
      color: '#8b9284 !important',
      border: '1px solid #fff',
      padding: '10px 14px',
    },
  },
  {
    '& .safety-note': {
      display: 'flex',
      gap: '25px',
      alignItems: 'center',
      borderTop: 0,
      paddingTop: '35px',
      marginTop: '35px',
    },
  },
  {
    '& .safety-note > .icon': {
      width: '44px',
      height: '44px',
      color: 'var(--lime)',
    },
  },
  {
    '& .safety-note h2': {
      fontSize: '22px',
      marginBottom: '12px',
    },
  },
  {
    '& .safety-note p': {
      fontSize: '15px',
      maxWidth: '840px',
    },
  },
  {
    '& .safety-note .mobile-login': {
      flexShrink: '0',
    },
  },
  {
    '& .pricing-content': {
      paddingBottom: '55px',
    },
  },
  {
    '& .pricing-grid': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '60px',
    },
  },
  {
    '& .pricing-list': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '18px',
    },
  },
  {
    '& .pricing-list article': {
      position: 'relative',
      display: 'block',
      margin: '0',
      padding: '25px',
      border: '1px solid var(--line)',
      borderRadius: '14px',
      minHeight: '0',
    },
  },
  {
    '& .pricing-list .pricing-card-icon': {
      position: 'absolute',
      right: '18px',
      bottom: '18px',
      width: '64px',
      height: '64px',
      color: 'var(--lime)',
      pointerEvents: 'none',
    },
    '& .pricing-list article > p': {
      paddingRight: '82px',
      marginTop: '17px',
      maxWidth: 'none',
    },
  },
  {
    '& .pricing-list .journey-title h3': {
      fontSize: '23px',
    },
    '& .pricing-list .number': {
      width: '39px',
      height: '39px',
      fontSize: '22px',
    },
  },
  {
    '& .pricing-list article:last-child': {
      margin: '0',
    },
  },
  {
    '& .pricing-list .icon': {
      color: 'var(--lime)',
      width: '64px',
      height: '64px',
    },
  },
  {
    '& .pricing-list h3': {
      fontSize: '23px',
      fontWeight: '600',
      letterSpacing: '-0.025em',
    },
  },
  {
    '& .pricing-list p': {
      fontSize: '16px',
      marginTop: '17px',
      lineHeight: '1.6',
      maxWidth: 'none',
    },
  },
  {
    '& .rate-notice': {
      display: 'flex',
      gap: '25px',
      background: 'var(--surface)',
      borderRadius: '14px',
      margin: '26px 0 0',
      padding: '25px',
      alignSelf: 'stretch',
      height: 'auto',
      boxSizing: 'border-box',
    },
  },
  {
    '& .rate-notice > .icon': {
      width: '60px',
      height: '60px',
      color: 'var(--lime)',
    },
  },
  {
    '& .rate-notice h2': {
      fontSize: '36px',
      fontWeight: '600',
      lineHeight: '1.05',
    },
  },
  {
    '& .rate-notice p': {
      fontSize: '18px',
      lineHeight: '1.5',
      marginTop: '36px',
    },
  },
  {
    '& .rate-notice small': {
      display: 'block',
      fontSize: '17px',
      marginTop: '25px',
    },
  },
  {
    '& .river-banner': {
      height: '365px',
      position: 'relative',
      overflow: 'hidden',
    },
  },
  {
    '& .river-banner img': {
      objectFit: 'cover',
    },
  },
  {
    '& .river-banner > div': {
      position: 'absolute',
      left: '80px',
      bottom: '40px',
      background: '#080a089e',
      padding: '15px 20px',
      borderRadius: '5px',
    },
  },
  {
    '& .river-banner h2': {
      fontSize: '38px',
      lineHeight: '1.08',
    },
  },
  {
    '& .river-banner p': {
      fontSize: '20px',
      marginTop: '10px',
      color: 'white',
    },
  },
  {
    '& .about-hero': {
      height: '1020px',
      position: 'relative',
      overflow: 'hidden',
    },
  },
  {
    '& .about-hero > img': {
      objectFit: 'cover',
      objectPosition: 'right 58%',
    },
  },
  {
    '& .about-copy': {
      position: 'relative',
      zIndex: '1',
      padding: '40px 0',
      maxWidth: '1050px',
    },
  },
  {
    '& .about-copy h1': {
      fontSize: '108px',
      lineHeight: '1.04',
      letterSpacing: '-0.045em',
    },
  },
  {
    '& .about-copy .eyebrow': {
      marginBottom: '30px',
    },
  },
  {
    '& .about-lead': {
      fontSize: 'clamp(16px, 1.25vw, 20px)',
      marginTop: '28px',
      color: '#f6f7f0',
      maxWidth: '900px',
      lineHeight: '1.75',
    },
  },
  {
    '& .about-narrative': {
      maxWidth: '560px',
      marginTop: '75px',
      padding: '16px 20px 16px 0',
      background: '#080a083d',
    },
  },
  {
    '& .about-narrative p': {
      fontSize: '23px',
      lineHeight: '1.55',
      marginBottom: '27px',
      color: '#e0e0d8',
    },
  },
  {
    '& .mission-link': {
      fontSize: '20px',
      marginTop: '12px',
      fontWeight: '600',
    },
  },
  {
    '& .mission-link .round-arrow': {
      width: '62px',
      height: '62px',
    },
  },
  {
    '& .about-benefits': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '26px',
      padding: '50px 0 55px',
    },
  },
  {
    '& .about-benefits article': {
      position: 'relative',
      display: 'block',
      border: '1px solid var(--line)',
      borderRadius: '14px',
      padding: '25px',
      minHeight: '0',
    },
  },
  {
    '& .about-benefit-icon-motion': {
      position: 'absolute',
      right: '18px',
      bottom: '18px',
      width: '64px',
      height: '64px',
    },
    '& .about-benefit-icon-motion .icon': {
      display: 'block',
      width: '100%',
      height: '100%',
      color: 'var(--lime)',
    },
  },
  {
    '& .about-benefits h3': {
      fontSize: '23px',
      fontWeight: '600',
    },
  },
  {
    '& .about-benefits p': {
      maxWidth: '340px',
      marginTop: '17px',
      paddingRight: '82px',
      fontSize: '16px',
      lineHeight: '1.4',
    },
  },
  {
    '& .help-page': {
      paddingBottom: '65px',
    },
  },
  {
    '& .help-page .page-intro': {
      marginBottom: '35px',
    },
  },
  {
    '& .help-content': {
      width: '100%',
    },
  },
  {
    '& .search': {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      background: 'var(--surface)',
      borderRadius: '50px',
      maxWidth: '720px',
      marginInline: 'auto',
      padding: '10px 18px',
    },
  },
  {
    '& .search .icon': {
      color: 'var(--lime)',
      width: '26px',
      height: '26px',
    },
  },
  {
    '& .search input': {
      background: 'none',
      border: '0',
      color: 'white',
      width: '100%',
      fontSize: '16px',
      padding: '6px 0',
    },
  },
  {
    '& .help-content > h2': {
      fontSize: '27px',
      letterSpacing: '-0.025em',
      margin: '27px 0 17px',
    },
  },
  {
    '& .faq-list .faq-item': {
      borderTop: '1px solid var(--line)',
      padding: '23px 17px',
    },
    '& .faq-list .faq-item:last-child': {
      borderBottom: '1px solid var(--line)',
    },
    '& .faq-list .faq-question': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '25px',
      width: '100%',
      padding: 0,
      border: 0,
      background: 'none',
      fontSize: '22px',
      color: '#d9dcd2',
      cursor: 'pointer',
      textAlign: 'left',
    },
    '& .faq-list .faq-question .icon': {
      color: 'var(--lime)',
      width: '24px',
      height: '24px',
      transition: 'transform 0.2s',
    },
    '& .faq-list .faq-question .icon.is-open': {
      transform: 'rotate(90deg)',
    },
  },
  {
    '& .faq-list .faq-answer p': {
      fontSize: '16px',
      lineHeight: '1.5',
      margin: '16px 0 0',
      width: '100%',
      maxWidth: 'none',
      boxSizing: 'border-box',
      padding: '14px 16px',
      borderRadius: '10px',
      background: '#151a13',
      color: 'rgb(245 245 240 / 82%)',
    },
  },
  {
    '& .faq-list small': {
      display: 'block',
      color: 'var(--lime)',
      fontSize: '13px',
      marginTop: '15px',
    },
  },
  {
    '& .empty-state': {
      padding: '30px',
    },
  },
  {
    '& .help-callout': {
      display: 'flex',
      alignItems: 'center',
      gap: '22px',
      marginTop: '38px',
      background: 'var(--surface)',
      padding: '28px',
      borderRadius: '18px',
    },
  },
  {
    '& .help-callout > .icon': {
      width: '60px',
      height: '60px',
      color: 'var(--lime)',
    },
  },
  {
    '& .help-callout h2': {
      fontSize: '28px',
      letterSpacing: '-0.025em',
    },
  },
  {
    '& .help-callout p': {
      fontSize: '18px',
      marginTop: '10px',
    },
  },
  {
    '& .help-callout .button': {
      marginLeft: 'auto',
      flexShrink: '0',
    },
  },
  {
    '& .closing-cta': {
      position: 'relative',
      background: 'var(--lime)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow: 'visible',
      borderRadius: '12px',
      padding: '48px 65px',
      minHeight: '320px',
      gap: '40px',
    },
  },
  {
    '& .closing-cta-video': {
      background: '#050706',
      overflow: 'hidden',
      aspectRatio: '16 / 9',
      minHeight: '0',
      transition: 'box-shadow 240ms ease',
    },
    '& .closing-cta-video:hover, & .closing-cta-video:focus-within': {
      boxShadow: '0 18px 40px rgb(0 0 0 / 28%)',
    },
  },
  {
    '& .closing-cta > img, & .closing-cta > video': {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'right bottom',
      clipPath: 'inset(0 round 12px)',
      zIndex: '0',
    },
    '& .closing-cta > video': {
      objectFit: 'contain',
      objectPosition: 'center',
      transform: 'none',
    },
  },
  {
    '& .closing-cta h2': {
      position: 'relative',
      fontSize: '45px',
      fontWeight: '700',
      color: '#090f02',
      lineHeight: '1.03',
      zIndex: '1',
    },
  },
  {
    '& .closing-cta .button': {
      position: 'relative',
      zIndex: '1',
      width: 'auto',
      minWidth: '0',
      minHeight: '52px',
      justifyContent: 'flex-start',
      gap: '12px',
      padding: '0 23px',
      borderRadius: '10px',
      fontSize: '14px',
      marginTop: '4px',
    },
  },
  {
    '& .site-footer': {
      padding: '45px 65px 25px',
    },
  },
  {
    '& .footer-grid': {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr 1.1fr 0.85fr',
      gap: '35px',
    },
  },
  {
    '& .footer-grid > .brand': {
      fontSize: '35px',
    },
  },
  {
    '& .footer-grid > .brand .brand-logo': {
      width: '88px',
      height: '88px',
    },
  },
  {
    '& .footer-grid p': {
      fontSize: '17px',
      marginTop: '20px',
    },
  },
  {
    '& .footer-grid nav': {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      alignItems: 'start',
    },
  },
  {
    '& .footer-grid h3': {
      fontSize: '19px',
      letterSpacing: '0.01em',
      fontWeight: '600',
      marginBottom: '10px',
    },
  },
  {
    '& .footer-grid nav a, & .footer-grid nav button': {
      fontSize: '16px',
      color: '#cdd0c5',
      border: '0',
      background: 'none',
      padding: '0',
      textAlign: 'left',
    },
  },
  {
    '& .footer-grid nav a:hover, & .footer-grid nav button:hover': {
      color: 'var(--lime)',
    },
  },
  {
    '& .footer-grid .active-language': {
      color: 'var(--lime)',
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
    },
  },
  {
    '& .footer-grid nav span': {
      display: 'inline-block',
      marginLeft: '22px',
      color: '#ddd',
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
    '& .skip-link': {
      position: 'fixed',
      top: '-100px',
      left: '20px',
      zIndex: '20',
      padding: '15px',
      background: 'var(--lime)',
      color: 'black',
    },
  },
  {
    '& .skip-link:focus': {
      top: '10px',
    },
  },
  {
    '& .sr-only': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
    },
  },
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
          'linear-gradient(\n      0deg,\n      rgb(5 7 6 / 94%) 0%,\n      rgb(5 7 6 / 58%) 55%,\n      rgb(5 7 6 / 6%) 100%\n    )',
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
    '@media (max-width: 1024px)': {
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
    '@media (max-width: 1024px)': {
      '& .brand': {
        gap: '10px',
      },
    },
  },
  {
    '@media (max-width: 1024px)': {
      '& .brand-logo': {
        width: '42px',
        height: '42px',
      },
    },
  },
  {
    '@media (max-width: 1024px)': {
      '& .desktop-nav, & .header-start': {
        display: 'none',
      },
    },
  },
  {
    '@media (max-width: 1024px)': {
      '& .header-right': {
        gap: '20px',
      },
    },
  },
  {
    '@media (max-width: 1024px)': {
      '& .locale-switch': {
        fontSize: '12px',
        gap: '9px',
      },
    },
  },
  {
    '@media (max-width: 1024px)': {
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
    '@media (max-width: 1024px)': {
      '& .menu-toggle .icon': {
        width: '23px',
        height: '23px',
      },
    },
  },
  {
    '@media (max-width: 1024px)': {
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
    '@media (max-width: 1024px)': {
      '& .mobile-menu > a:not(.mobile-login)': {
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
    '@media (max-width: 1024px)': {
      '& .mobile-menu .mobile-login': {
        justifyContent: 'center',
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
  {
    '@media (max-width: 767px)': {
      '& .mobile-login': {
        fontSize: '13px',
        padding: '12px 19px',
        marginTop: '18px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-details': {
        padding: '25px 0',
        margin: '15px 0',
        gap: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-details h2': {
        fontSize: '26px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .fleet-details p': {
        fontSize: '14px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components': {
        width: '100%',
        margin: '0',
        padding: '58px 0 20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-heading': {
        marginBottom: '25px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-heading p': {
        fontSize: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-image': {
        borderRadius: '10px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-list': {
        gridTemplateColumns: '1fr',
        marginTop: '24px',
        '&::before, &::after': {
          display: 'none',
        },
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-list li': {
        minHeight: '0',
        padding: '19px 16px',
        borderRight: '0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-list h3': {
        fontSize: '18px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-list p': {
        fontSize: '14px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home': {
        padding: '40px 0 0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .section-heading': {
        alignItems: 'start',
        gap: '15px',
        marginBottom: '22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .section-heading h2': {
        fontSize: '27px',
        maxWidth: '240px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home .section-heading h2, & .lower-home .section-heading p': {
        width: '100%',
        maxWidth: 'none',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .section-heading .eyebrow': {
        fontSize: '10px',
        marginBottom: '12px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .section-heading p': {
        fontSize: '13px',
        maxWidth: '240px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .inline-link': {
        fontSize: '11px',
        gap: '8px',
        whiteSpace: 'normal',
        flexShrink: '0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .section-heading .inline-link': {
        minWidth: '0',
        maxWidth: 'none',
        alignItems: 'start',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .inline-link .round-arrow': {
        width: '19px',
        height: '19px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .inline-link .icon': {
        width: '19px',
        height: '19px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .ride-tiles': {
        gridTemplateColumns: '1fr',
        gap: '16px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .ride-tile': {
        height: '300px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .tile-caption': {
        left: '14px',
        right: '14px',
        bottom: '14px',
        padding: '16px',
        gap: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .tile-caption h3': {
        fontSize: '21px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .tile-caption p': {
        fontSize: '13px',
        maxWidth: '245px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .tile-caption .round-arrow': {
        width: '38px',
        height: '38px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .journey-section': {
        padding: '40px 0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .journey-columns': {
        gridTemplateColumns: '1fr',
        gap: '27px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .journey-columns article': {
        border: '1px solid var(--line)',
        borderRadius: '16px',
        padding: '26px 24px 28px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .journey-columns article:last-child': {
        borderBottom: '1px solid var(--line)',
        paddingBottom: '28px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .journey-title': {
        gap: '14px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .journey-title h3': {
        fontSize: '24px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .number': {
        width: '37px',
        height: '37px',
        fontSize: '21px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .journey-columns p': {
        fontSize: '15px',
        maxWidth: '100%',
        marginTop: '13px',
        lineHeight: '1.5',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home .journey-columns p': {
        paddingLeft: '50px',
        fontSize: '14px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home .journey-columns': {
        gap: '12px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home .journey-columns article, & .lower-home .journey-columns article:last-child':
        {
          border: '1px solid var(--line)',
          borderRadius: '12px',
          padding: '20px',
        },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home .journey-columns p': {
        paddingLeft: '0',
        paddingRight: '62px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home .journey-title h3': {
        fontSize: '22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .lower-home .animated-journey-icon': {
        right: '14px',
        bottom: '14px',
        width: '48px',
        height: '48px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .with-phones': {
        marginTop: '36px',
        paddingTop: '20px',
      },
      '& .with-phones .journey-columns': {
        marginTop: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .with-phones .journey-columns': {
        gap: '35px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .with-phones .journey-columns article': {
        padding: '20px 24px 25px',
      },
      '& .with-phones .journey-columns > article > p': {
        minHeight: '0',
      },
      '& .with-phones .phone-art': {
        marginTop: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .with-phones .journey-title h3': {
        fontSize: '25px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .phone-art': {
        maxWidth: '280px',
        height: 'auto',
        margin: '22px auto 0',
        borderRadius: '35px 35px 0 0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .demo-note': {
        fontSize: '10px !important',
        lineHeight: '1.5',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .safety-note': {
        alignItems: 'start',
        gap: '15px',
        flexWrap: 'wrap',
        paddingTop: '25px',
        marginTop: '28px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .safety-note > .icon': {
        width: '33px',
        height: '33px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .safety-note > div': {
        width: 'calc(100% - 48px)',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .safety-note h2': {
        fontSize: '20px',
        lineHeight: '1.2',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .safety-note p': {
        fontSize: '13px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .safety-note .mobile-login': {
        marginLeft: '48px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-grid': {
        gridTemplateColumns: '1fr',
        marginTop: '38px',
        gap: '30px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-list': {
        border: '0',
        padding: '0',
        gridTemplateColumns: '1fr',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-list article': {
        gap: '20px',
        marginBottom: '30px',
        padding: '20px',
      },
      '& .pricing-list article:last-child': {
        marginBottom: '0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-list .icon': {
        width: '39px',
        height: '39px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-list h3': {
        fontSize: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-list p': {
        fontSize: '14px',
        marginTop: '9px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .rate-notice': {
        margin: '0',
        padding: '28px',
        gap: '20px',
        borderRadius: '20px',
        height: 'auto',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .rate-notice > .icon': {
        width: '39px',
        height: '39px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .rate-notice h2': {
        fontSize: '27px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .rate-notice p': {
        fontSize: '14px',
        marginTop: '22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .rate-notice small': {
        fontSize: '13px',
        marginTop: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .river-banner': {
        height: '275px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .river-banner > div': {
        left: '20px',
        right: '20px',
        bottom: '20px',
        padding: '16px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .river-banner h2': {
        fontSize: '28px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .river-banner p': {
        fontSize: '14px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-hero': {
        height: '920px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-hero > img': {
        objectPosition: '60% center',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-copy': {
        padding: '35px 22px',
        maxWidth: '100%',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-copy h1': {
        fontSize: 'clamp(42px, 10.3vw, 76px)',
        lineHeight: '1.05',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-copy .eyebrow': {
        marginBottom: '22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-lead': {
        fontSize: '15px',
        lineHeight: '1.5',
        marginTop: '25px',
        maxWidth: '330px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-narrative': {
        maxWidth: '295px',
        marginTop: '65px',
        padding: '17px',
        background: '#080a08ba',
        borderRadius: '8px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-narrative p': {
        fontSize: '15px',
        lineHeight: '1.6',
        marginBottom: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-narrative p:last-child': {
        marginBottom: '0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .mission-link': {
        fontSize: '15px',
        marginTop: '25px',
        gap: '15px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .mission-link .round-arrow': {
        width: '44px',
        height: '44px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .mission-link .icon': {
        width: '24px',
        height: '24px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-benefits': {
        gridTemplateColumns: '1fr',
        padding: '32px 0',
        gap: '25px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-benefits article': {
        border: '0',
        padding: '0',
        gap: '23px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-benefit-icon-motion': {
        width: '42px',
        height: '42px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-benefits h3': {
        fontSize: '19px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .about-benefits p': {
        fontSize: '14px',
        marginTop: '8px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-page .page-intro': {
        marginBottom: '28px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .search': {
        gap: '15px',
        padding: '12px 19px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .search .icon': {
        width: '25px',
        height: '25px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .search input': {
        fontSize: '14px',
        padding: '7px 0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-content > h2': {
        fontSize: '20px',
        margin: '23px 0 14px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list .faq-item': {
        padding: '20px 5px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list .faq-question': {
        fontSize: '15px',
        lineHeight: '1.4',
        gap: '20px',
        minHeight: '24px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list .faq-question .icon': {
        width: '20px',
        height: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list .faq-answer p': {
        fontSize: '14px',
        lineHeight: '1.6',
        marginTop: '17px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list small': {
        fontSize: '10px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-callout': {
        padding: '23px 20px',
        gap: '15px',
        flexWrap: 'wrap',
        marginTop: '30px',
        borderRadius: '14px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-callout > .icon': {
        width: '36px',
        height: '36px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-callout > div': {
        flex: '1',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-callout h2': {
        fontSize: '21px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-callout p': {
        fontSize: '13px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .help-callout .button': {
        marginLeft: '0',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .closing-cta': {
        padding: '30px 22px',
        minHeight: '280px',
        borderRadius: '10px',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '25px',
      },
      '& .closing-cta-video': {
        aspectRatio: 'auto',
        minHeight: '390px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .closing-cta > img, & .closing-cta > video': {
        objectPosition: 'right bottom',
        clipPath: 'inset(0 round 10px)',
      },
      '& .closing-cta > video': {
        objectFit: 'contain',
        objectPosition: 'center',
        transform: 'none',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .closing-cta h2': {
        fontSize: '29px',
        lineHeight: '1.1',
        maxWidth: '350px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .closing-cta .button': {
        width: 'auto',
        minWidth: '0',
        minHeight: '52px',
        justifyContent: 'flex-start',
        gap: '12px',
        padding: '0 23px',
        borderRadius: '10px',
        fontSize: '14px',
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
      '& .footer-grid': {
        gridTemplateColumns: '1fr 1fr',
        gap: '30px 22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-grid > div:first-child': {
        gridColumn: '1 / -1',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-grid .brand': {
        fontSize: '29px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-grid p': {
        fontSize: '14px',
        marginTop: '12px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-grid nav': {
        gap: '13px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-grid nav a, & .footer-grid nav button': {
        fontSize: '13px',
        minHeight: '22px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-grid h3': {
        fontSize: '16px',
        marginBottom: '4px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .footer-grid nav span': {
        marginLeft: '15px',
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
        'linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 43%) 52%, transparent 100%)',
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
        paddingBlock: '70px 54px',
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
  {
    '@media (min-width: 768px)': {
      '& .fleet-hero, & .about-hero': {
        width: '100vw',
        height: 'clamp(640px, calc(100svh - 104px), 940px)',
        minHeight: '620px',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        borderRadius: '0',
      },
      '& .about-copy': {
        maxWidth: '760px',
        marginLeft: '0',
        padding: '224px 0 40px clamp(24px, 5vw, 82px)',
        zIndex: '2',
      },
      '& .fleet-intro': {
        left: 'clamp(24px, 5vw, 82px)',
        maxWidth: '760px',
        top: '224px',
      },
      '& .page-hero-visual': {
        position: 'absolute',
        top: '0',
        left: '50%',
        right: 'auto',
        width: '100vw',
        transform: 'translateX(-50%)',
        height: 'clamp(640px, calc(100svh - 104px), 940px)',
        overflow: 'hidden',
        zIndex: '0',
      },
      '& .page-hero-visual::after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '-3px',
        background:
          'linear-gradient(90deg, rgb(0 0 0 / 76%) 0%, rgb(0 0 0 / 49%) 37%, rgb(0 0 0 / 8%) 75%), linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 88%) 12%, transparent 42%)',
      },
      '& .page-hero-visual img': {
        objectFit: 'cover',
        objectPosition: '75% center',
      },
      '& .pricing-content .page-hero-visual img, & .how-content .page-hero-visual img':
        {
          objectPosition: '82% center',
        },
      '& .page-content > *:not(.page-hero-visual)': {
        position: 'relative',
        zIndex: '1',
      },
      '& .page-content > .page-intro': {
        width: 'min(760px, 75vw)',
        minHeight: 'calc(clamp(640px, calc(100svh - 104px), 940px) - 224px)',
      },
      '& .page-intro p, & .about-copy .about-lead': { maxWidth: '515px' },
      '& .home-hero h1, & .page-intro h1, & .fleet-intro h1, & .about-copy h1':
        {
          fontSize: 'clamp(44px, 3.8vw, 56px) !important',
        },
      '& .home-hero-overlay, & .motorcycle-shade': {
        background:
          'linear-gradient(90deg, rgb(0 0 0 / 76%) 0%, rgb(0 0 0 / 49%) 37%, rgb(0 0 0 / 8%) 75%), linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 88%) 12%, transparent 42%)',
      },
      '& .about-hero::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        height: '34%',
        zIndex: '1',
        background:
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 82%) 14%, transparent 100%)',
        pointerEvents: 'none',
      },
      '& .page-content': {
        position: 'relative',
        paddingTop: '224px',
      },
      '& .help-callout .button': {
        minWidth: '0',
        minHeight: '52px',
        justifyContent: 'flex-start',
        padding: '0 23px',
        borderRadius: '10px',
        fontSize: '14px',
        gap: '12px',
      },
      '& .help-callout .button:hover': {
        background: '#8be63b',
        boxShadow: '0 8px 20px rgb(0 0 0 / 18%)',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .page-content': {
        position: 'relative',
        padding: '0 0 45px',
      },
      '& .page-hero-visual': {
        position: 'absolute',
        top: '0',
        left: '50%',
        right: 'auto',
        width: '100vw',
        transform: 'translateX(-50%)',
        height: '640px',
        overflow: 'hidden',
        zIndex: '0',
      },
      '& .page-hero-visual::after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '-3px',
        background:
          'linear-gradient(90deg, rgb(0 0 0 / 88%), rgb(0 0 0 / 28%)), linear-gradient(0deg, #080a08 0%, transparent 65%)',
      },
      '& .help-callout .button': {
        minWidth: '0',
        width: '100%',
        minHeight: '52px',
        padding: '0 23px',
        borderRadius: '10px',
        fontSize: '14px',
        gap: '12px',
      },
      '& .page-hero-visual img': {
        objectFit: 'cover',
        objectPosition: '75% center',
      },
      '& .pricing-content .page-hero-visual img, & .how-content .page-hero-visual img':
        {
          objectPosition: '82% center',
        },
      '& .page-content > *:not(.page-hero-visual)': {
        position: 'relative',
        zIndex: '1',
      },
      '& .page-content > .page-intro': {
        width: '100vw',
        height: '640px',
        minHeight: '640px',
        maxHeight: '640px',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        transform: 'translateY(-48px)',
        padding: '333px 24px 0',
      },
      '& .fleet-intro': {
        top: '333px',
        bottom: 'auto',
        left: '24px',
        right: '24px',
        transform: 'translateY(-48px)',
      },
      '& .fleet-hero, & .about-hero': {
        width: '100vw',
        height: '640px',
        minHeight: '640px',
        maxHeight: '640px',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        borderRadius: '0',
      },
      '& .about-hero': {
        height: 'auto',
        minHeight: '640px',
        maxHeight: 'none',
        overflow: 'visible',
      },
      '& .bike-photo, & .scooter-photo': {
        height: '640px',
      },
      '& .bike-photo img, & .scooter-photo img': {
        objectPosition: '62% center',
      },
      '& .motorcycle-hero > img': {
        objectPosition: '62% center',
      },
      '& .about-hero > img': {
        objectPosition: '75% center',
      },
      '& .about-copy': {
        position: 'relative',
        left: 'auto',
        right: 'auto',
        top: 'auto',
        bottom: 'auto',
        transform: 'translateY(-48px)',
        padding: '333px 24px 40px',
      },
      "html[lang='th'] & .page-intro h1, html[lang='th'] & .fleet-intro h1, html[lang='th'] & .about-copy h1":
        {
          fontSize: 'clamp(42px, 10vw, 64px)',
          fontWeight: '600',
          lineHeight: '1.1',
          letterSpacing: '0.01em',
        },
      '& .page-intro h1 + p, & .fleet-intro h1 + p, & .about-copy h1 + p': {
        marginTop: '20px',
      },
    },
  },
  {
    '@media (min-width: 768px) and (max-width: 1100px)': {
      '& .home-hero p, & .page-intro p, & .fleet-intro > p, & .about-lead, & .about-narrative p':
        {
          fontSize: 'clamp(16px, 1.9vw, 18px)',
          lineHeight: '1.65',
        },
      '& .section-heading h2, & .closing-cta h2, & .rate-notice h2, & .help-callout h2':
        {
          fontSize: 'clamp(28px, 3.2vw, 34px)',
        },
      '& .fleet-caption h2, & .pricing-list h3, & .about-benefits h3, & .faq-list .faq-question':
        {
          fontSize: 'clamp(19px, 2.2vw, 22px)',
        },
      '& .fleet-caption p, & .pricing-list p, & .journey-columns p, & .about-benefits p, & .faq-list .faq-answer p':
        {
          fontSize: '15px',
          lineHeight: '1.6',
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
      '& .home-hero p, & .page-intro p, & .fleet-intro > p, & .about-lead, & .about-narrative p':
        {
          fontSize: 'clamp(15px, 4vw, 16px)',
          lineHeight: '1.65',
        },
      '& .section-heading h2, & .closing-cta h2, & .rate-notice h2, & .help-callout h2':
        {
          fontSize: 'clamp(25px, 7vw, 30px)',
          lineHeight: '1.18',
        },
      '& .fleet-caption h2, & .pricing-list h3, & .about-benefits h3, & .journey-title h3, & .faq-list .faq-question':
        {
          fontSize: 'clamp(18px, 5.2vw, 21px)',
          lineHeight: '1.35',
        },
      '& .fleet-caption p, & .pricing-list p, & .journey-columns p, & .about-benefits p, & .faq-list .faq-answer p':
        {
          fontSize: '14px',
          lineHeight: '1.6',
        },
    },
  },
  // Keep the type scale consistent after switching to IBM Plex Sans Thai.
  // This last layer intentionally normalizes the shared patterns used by every public page.
  {
    '& .vehicle-care, & .about-proof': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.78fr) minmax(0, 1.22fr)',
      gap: 'clamp(30px, 5vw, 88px)',
      padding: 'clamp(62px, 8vw, 112px) 0',
      borderTop: '1px solid #2a3027',
    },
    '& .vehicle-care': {
      borderTop: 0,
    },
    '& .vehicle-care-heading, & .about-proof-heading': {
      alignSelf: 'start',
    },
    '& .vehicle-care-heading .eyebrow, & .about-proof-heading .eyebrow': {
      display: 'block',
      marginBottom: '14px',
    },
    '& .vehicle-care h2, & .about-proof h2': {
      maxWidth: '480px',
      fontSize: 'clamp(32px, 3vw, 48px)',
      fontWeight: '600',
      lineHeight: '1.12',
      letterSpacing: '-0.035em',
    },
    '& .vehicle-care-heading > p, & .about-proof-heading > p': {
      marginTop: '18px',
      maxWidth: '510px',
      color: '#bec4b7',
      fontSize: '17px',
      lineHeight: '1.65',
    },
    '& .vehicle-care-list, & .about-proof-list': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '1px',
      overflow: 'hidden',
      border: '1px solid #2a3027',
      borderRadius: '12px',
      background: '#2a3027',
    },
    '& .vehicle-care-list article, & .about-proof-list article': {
      minHeight: '242px',
      padding: '26px 22px',
      background: '#090c0b',
    },
    '& .vehicle-care-list .icon, & .about-proof-list .icon': {
      width: '34px',
      height: '34px',
      marginBottom: '42px',
      color: 'var(--lime)',
    },
    '& .vehicle-care-list h3, & .about-proof-list h3': {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '1.3',
    },
    '& .vehicle-care-list p, & .about-proof-list p': {
      marginTop: '9px',
      color: '#aeb5a6',
      fontSize: '15px',
      lineHeight: '1.6',
    },
    '@media (max-width: 900px)': {
      '& .vehicle-care, & .about-proof': {
        gridTemplateColumns: '1fr',
      },
    },
  },
  {
    '& .vehicle-care': {
      display: 'block',
      padding: '48px 0 64px',
    },
    '& .vehicle-care-heading': {
      maxWidth: '760px',
      marginBottom: '32px',
    },
  },
  {
    '& .factory-capabilities, & .brand-events': {
      padding: 'clamp(72px, 9vw, 132px) 0',
      borderTop: '1px solid #2a3027',
    },
    '& .factory-capabilities-heading, & .brand-events-heading': {
      maxWidth: '720px',
    },
    '& .factory-capabilities h2, & .brand-events h2': {
      marginTop: '13px',
      fontSize: 'clamp(32px, 3vw, 48px)',
      lineHeight: '1.16',
      letterSpacing: '-0.035em',
    },
    '& .factory-capabilities-heading > p, & .brand-events-heading > p': {
      marginTop: '18px',
      maxWidth: '650px',
      color: '#bec4b7',
      fontSize: '16px',
      lineHeight: '1.7',
    },
    '& .factory-facts': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '12px',
      marginTop: 'clamp(34px, 4vw, 52px)',
    },
    '& .factory-facts article': {
      minHeight: '156px',
      padding: '22px 24px 24px',
      border: '1px solid #2a3027',
      borderRadius: '12px',
      background: 'linear-gradient(145deg, #0d120e 0%, #090c0b 100%)',
    },
    '& .factory-fact-label, & .factory-address-label': {
      display: 'block',
      color: 'var(--lime)',
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '0.1em',
      lineHeight: '1.3',
      textTransform: 'uppercase',
    },
    '& .factory-fact-content': {
      display: 'grid',
      alignContent: 'start',
      gap: '8px',
      marginTop: '18px',
    },
    '& .factory-facts strong': {
      color: 'var(--lime)',
      fontSize: 'clamp(22px, 2vw, 31px)',
      fontWeight: '600',
      lineHeight: '1.1',
    },
    '& .factory-facts span': {
      color: '#aeb5a6',
      fontSize: '14px',
      lineHeight: '1.55',
    },
    '& .factory-location': {
      marginTop: '12px',
      padding: 'clamp(26px, 3vw, 38px)',
      border: '1px solid #2a3027',
      borderRadius: '14px',
      background: 'linear-gradient(120deg, #0d120e 0%, #090c0b 72%)',
    },
    '& .factory-location-content': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
      gap: 'clamp(24px, 5vw, 72px)',
    },
    '& .factory-location h3': {
      marginTop: '12px',
      fontSize: 'clamp(22px, 2.2vw, 32px)',
      fontWeight: '600',
      lineHeight: '1.16',
      letterSpacing: '-0.03em',
    },
    '& .factory-location address': {
      display: 'grid',
      alignContent: 'start',
      gap: '8px',
      margin: 0,
      color: '#bec4b7',
      fontSize: '16px',
      fontStyle: 'normal',
      lineHeight: '1.65',
    },
    '& .factory-location .factory-address-label': {
      marginBottom: '3px',
    },
    '& .factory-location address strong': {
      color: '#f7f8f4',
      fontWeight: '600',
    },
    '& .factory-location address small': {
      marginTop: '4px',
      color: '#8b9385',
      fontSize: '13px',
      lineHeight: '1.5',
    },
    '& .factory-capability-list': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '12px',
      marginTop: '12px',
    },
    '& .factory-capability-list article': {
      minHeight: '154px',
      padding: '28px 24px',
      border: '1px solid #2a3027',
      borderRadius: '12px',
      background: '#090c0b',
    },
    '& .factory-capability-content': {
      display: 'grid',
      gridTemplateColumns: '50px minmax(0, 1fr)',
      gap: '18px',
    },
    '& .factory-capability-content > span': {
      color: 'var(--lime)',
      fontSize: '13px',
      fontWeight: '600',
      letterSpacing: '0.08em',
    },
    '& .factory-capability-list h3, & .brand-events-list h3': {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '1.28',
    },
    '& .factory-capability-list p, & .brand-events-list p': {
      marginTop: '9px',
      color: '#aeb5a6',
      fontSize: '15px',
      lineHeight: '1.62',
    },
    '& .brand-events-list': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '0 42px',
      margin: 'clamp(42px, 6vw, 78px) 0 0',
      padding: 0,
      listStyle: 'none',
    },
    '& .brand-events-list li': {
      padding: '24px 0',
      borderTop: '1px solid #2a3027',
    },
    '& .brand-events-list li > a': {
      display: 'grid',
      gridTemplateColumns: '112px 136px minmax(0, 1fr)',
      gap: '18px',
      color: 'inherit',
      textDecoration: 'none',
    },
    '& .brand-events-list img': {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: '96px',
      borderRadius: '8px',
      objectFit: 'cover',
      transition:
        'transform 360ms cubic-bezier(0.16, 1, 0.3, 1), filter 260ms ease',
    },
    '& .brand-events-list li:hover img': {
      transform: 'scale(1.035)',
      filter: 'saturate(1.08) contrast(1.04)',
    },
    '& .brand-events-list time': {
      color: 'var(--lime)',
      fontSize: '13px',
      fontWeight: '600',
      lineHeight: '1.45',
    },
    '@media (max-width: 900px)': {
      '& .factory-facts, & .factory-capability-list, & .brand-events-list': {
        gridTemplateColumns: '1fr',
      },
      '& .factory-location-content': {
        gridTemplateColumns: '1fr',
      },
      '& .brand-events-list': { gap: 0 },
    },
    '@media (max-width: 600px)': {
      '& .factory-capabilities, & .brand-events': { padding: '62px 0' },
      '& .factory-facts article': { minHeight: '0', padding: '20px' },
      '& .factory-capability-content': {
        gridTemplateColumns: '38px minmax(0, 1fr)',
      },
      '& .factory-capability-list article': {
        minHeight: '0',
        padding: '24px 18px',
      },
      '& .brand-events-list li': {
        padding: '22px 0',
      },
      '& .brand-events-list li > a': {
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
      },
      '& .brand-events-list img': {
        gridColumn: '1 / -1',
        minHeight: 'auto',
        aspectRatio: '16 / 9',
      },
    },
  },
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
      '& .event-detail-hero': { gridTemplateColumns: '1fr' },
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
        fontSize: 'clamp(40px, 10vw, 50px)',
        fontWeight: 600,
        lineHeight: 1.16,
        letterSpacing: '0.005em',
      },
    },
    '@media (max-width: 600px)': {
      '& .event-page': { padding: '104px 20px 0' },
      '& .event-detail-hero figure': { aspectRatio: '4 / 3' },
      '& .event-detail-gallery-heading': {
        gridTemplateColumns: '1fr',
        gap: '16px',
      },
      '& .event-detail-gallery-heading h2': { gridColumn: 'auto' },
      '& .event-detail-gallery-grid': {
        gridTemplateColumns: '1fr',
        gap: '12px',
      },
    },
  },
  {
    '& .manufacturing-gallery': {
      padding: '0 0 clamp(64px, 9vw, 128px)',
    },
    '& .manufacturing-gallery-heading': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'clamp(26px, 5vw, 88px)',
      marginBottom: '28px',
      paddingTop: '34px',
      borderTop: '1px solid #2a3027',
    },
    '& .manufacturing-gallery-heading h2': {
      maxWidth: '520px',
      fontSize: 'clamp(28px, 2.6vw, 42px)',
      fontWeight: '600',
      lineHeight: '1.16',
      letterSpacing: '-0.03em',
    },
    '& .manufacturing-gallery-heading p': {
      maxWidth: '540px',
      color: '#bec4b7',
      fontSize: '16px',
      lineHeight: '1.65',
    },
    '& .manufacturing-gallery-grid': {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
      gap: '16px',
    },
    '& .manufacturing-gallery figure': {
      margin: '0',
      overflow: 'hidden',
      border: '1px solid #2a3027',
      borderRadius: '14px',
      background: '#090c0b',
    },
    '& .manufacturing-gallery figure:nth-child(1), & .manufacturing-gallery figure:nth-child(2)':
      {
        gridColumn: 'span 3',
      },
    '& .manufacturing-gallery figure:nth-child(n + 3)': {
      gridColumn: 'span 2',
    },
    '& .manufacturing-gallery img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      objectFit: 'contain',
      filter: 'saturate(0.82) contrast(1.04)',
    },
    '& .manufacturing-gallery figcaption': {
      padding: '13px 16px',
      color: '#bec4b7',
      fontSize: '14px',
      lineHeight: '1.45',
    },
    '& .events-gallery-heading': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)',
      gap: 'clamp(26px, 5vw, 88px)',
      marginTop: 'clamp(54px, 7vw, 94px)',
      paddingTop: '34px',
      borderTop: '1px solid #2a3027',
    },
    '& .events-gallery-heading h3': {
      fontSize: 'clamp(24px, 2.2vw, 36px)',
      fontWeight: '600',
      lineHeight: '1.16',
      letterSpacing: '-0.03em',
    },
    '& .events-gallery-heading p': {
      maxWidth: '560px',
      color: '#bec4b7',
      fontSize: '16px',
      lineHeight: '1.65',
    },
    '& .events-gallery-grid': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '16px',
      marginTop: '28px',
    },
    '& .events-gallery-grid figure': {
      margin: 0,
      overflow: 'hidden',
      border: '1px solid #2a3027',
      borderRadius: '14px',
      background: '#090c0b',
    },
    '& .events-gallery-grid img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      filter: 'saturate(0.9) contrast(1.03)',
    },
    '& .events-gallery-grid figcaption': {
      padding: '13px 16px',
      color: '#bec4b7',
      fontSize: '14px',
      lineHeight: '1.45',
    },
    '@media (max-width: 767px)': {
      '& .manufacturing-gallery': {
        paddingBottom: '62px',
      },
      '& .manufacturing-gallery-heading, & .manufacturing-gallery-grid': {
        gridTemplateColumns: '1fr',
      },
      '& .manufacturing-gallery figure:nth-child(n)': { gridColumn: 'auto' },
      '& .manufacturing-gallery-heading': {
        gap: '12px',
      },
      '& .events-gallery-heading, & .events-gallery-grid': {
        gridTemplateColumns: '1fr',
      },
      '& .events-gallery-heading': { gap: '12px' },
    },
  },
  {
    '& .kronos-collaboration': {
      padding: 'clamp(72px, 9vw, 132px) 0',
      borderTop: '1px solid #2a3027',
    },
    '& .kronos-collaboration-copy': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.88fr) minmax(0, 1.12fr)',
      gap: 'clamp(26px, 5vw, 88px)',
      alignItems: 'end',
      marginBottom: 'clamp(34px, 5vw, 64px)',
    },
    '& .kronos-collaboration-copy h2': {
      gridRow: '2',
      maxWidth: '580px',
      marginTop: '14px',
      fontSize: 'clamp(32px, 3.2vw, 52px)',
      fontWeight: '600',
      lineHeight: '1.12',
      letterSpacing: '-0.035em',
    },
    '& .kronos-collaboration-copy .eyebrow': {
      gridColumn: '1 / -1',
    },
    '& .kronos-collaboration-copy p': {
      maxWidth: '560px',
      color: '#bec4b7',
      fontSize: '17px',
      lineHeight: '1.68',
    },
    '& .kronos-press-gallery': {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '16px',
    },
    '& .kronos-press-gallery figure': {
      position: 'relative',
      margin: 0,
      overflow: 'hidden',
      border: '1px solid #2a3027',
      borderRadius: '14px',
      background: '#090c0b',
    },
    '& .kronos-press-gallery figure:nth-child(1)': {
      gridColumn: 'span 7',
    },
    '& .kronos-press-gallery figure:nth-child(2)': {
      gridColumn: 'span 5',
    },
    '& .kronos-press-gallery figure:nth-child(3), & .kronos-press-gallery figure:nth-child(4)':
      {
        gridColumn: 'span 6',
      },
    '& .kronos-press-gallery img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      transition:
        'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), filter 300ms ease',
    },
    '& .kronos-press-gallery figure:hover img': {
      transform: 'scale(1.035)',
      filter: 'saturate(1.06) contrast(1.04)',
    },
    '& .kronos-press-gallery figcaption': {
      padding: '13px 16px',
      color: '#bec4b7',
      fontSize: '14px',
      lineHeight: '1.45',
    },
    '& .kronos-press-sources': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.88fr) minmax(0, 1.12fr)',
      gap: 'clamp(26px, 5vw, 88px)',
      marginTop: '28px',
      paddingTop: '30px',
      borderTop: '1px solid #2a3027',
    },
    '& .kronos-press-sources h3': {
      fontSize: 'clamp(24px, 2.3vw, 36px)',
      fontWeight: '600',
      lineHeight: '1.16',
      letterSpacing: '-0.03em',
    },
    '& .kronos-press-sources p': {
      maxWidth: '560px',
      marginTop: '13px',
      color: '#bec4b7',
      fontSize: '16px',
      lineHeight: '1.65',
    },
    '& .kronos-press-sources > div:last-child': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      alignContent: 'start',
      borderTop: '1px solid #2a3027',
      borderLeft: '1px solid #2a3027',
    },
    '& .kronos-press-sources a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      minHeight: '88px',
      padding: '18px',
      borderRight: '1px solid #2a3027',
      borderBottom: '1px solid #2a3027',
      color: '#f7f8f4',
      fontSize: '15px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'background-color 220ms ease, color 220ms ease',
    },
    '& .kronos-press-sources a:hover': {
      background: 'var(--lime)',
      color: '#081008',
    },
    '& .kronos-press-sources a span': {
      fontSize: '20px',
      lineHeight: 1,
    },
    '@media (max-width: 767px)': {
      '& .kronos-collaboration': {
        padding: '62px 0',
      },
      '& .kronos-collaboration-copy, & .kronos-press-sources': {
        gridTemplateColumns: '1fr',
        gap: '14px',
      },
      '& .kronos-collaboration-copy h2': {
        gridRow: 'auto',
      },
      '& .kronos-press-gallery': {
        gridTemplateColumns: '1fr',
        gap: '12px',
      },
      '& .kronos-press-gallery figure:nth-child(n)': {
        gridColumn: 'auto',
      },
      '& .kronos-press-sources > div:last-child': {
        gridTemplateColumns: '1fr',
      },
    },
  },
  {
    '& .site-topbar': {
      fontSize: '11px',
      lineHeight: '1.2',
    },
    '& .button': {
      fontSize: '16px',
      lineHeight: '1.35',
    },
    '& .eyebrow': {
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '1.35',
    },
    '& .section-heading h2, & .vehicle-components-heading h2, & .vehicle-care h2, & .about-proof h2, & .fleet-details h2, & .help-content > h2':
      {
        fontSize: 'clamp(32px, 2.8vw, 40px)',
        lineHeight: '1.18',
      },
    '& .section-heading p, & .vehicle-components-heading p, & .vehicle-care-heading > p, & .about-proof-heading > p, & .fleet-details p, & .safety-note p, & .help-callout p':
      {
        fontSize: '16px',
        lineHeight: '1.65',
      },
    '& .vehicle-components-list h3, & .vehicle-care-list h3, & .about-proof-list h3, & .journey-title h3, & .pricing-list h3, & .about-benefits h3, & .faq-list .faq-question':
      {
        fontSize: 'clamp(20px, 1.7vw, 23px)',
        lineHeight: '1.35',
      },
    '& .vehicle-components-list p, & .vehicle-care-list p, & .about-proof-list p, & .journey-columns p, & .pricing-list p, & .about-benefits p, & .faq-list .faq-answer p':
      {
        fontSize: '16px',
        lineHeight: '1.65',
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
      '& .site-topbar': {
        fontSize: '10px',
      },
      '& .desktop-nav': {
        fontSize: '14px',
      },
      '& .mobile-menu a, & .mobile-menu button': {
        fontSize: '16px',
        lineHeight: '1.45',
      },
      '& .home-hero h1, & .page-intro h1, & .fleet-intro h1, & .about-copy h1':
        {
          fontSize: 'clamp(40px, 10vw, 50px) !important',
          lineHeight: '1.16 !important',
          letterSpacing: '0.005em !important',
        },
      '& .home-hero p, & .page-intro p, & .fleet-intro > p, & .about-lead, & .about-narrative p':
        {
          fontSize: '16px',
          lineHeight: '1.65',
        },
      '& .vehicle-care, & .about-proof': {
        gap: '28px',
        padding: '58px 0',
      },
      '& .vehicle-care-list, & .about-proof-list': {
        gridTemplateColumns: '1fr',
      },
      '& .vehicle-care-list article, & .about-proof-list article': {
        minHeight: '0',
        padding: '24px 22px',
      },
      '& .vehicle-care-list .icon, & .about-proof-list .icon': {
        marginBottom: '26px',
      },
      '& .section-heading h2, & .closing-cta h2, & .rate-notice h2, & .help-callout h2, & .vehicle-components-heading h2, & .fleet-details h2, & .help-content > h2':
        {
          fontSize: 'clamp(26px, 7vw, 30px)',
          lineHeight: '1.22',
        },
      '& .vehicle-components-list h3, & .fleet-caption h2, & .pricing-list h3, & .about-benefits h3, & .journey-title h3, & .faq-list .faq-question':
        {
          fontSize: '20px',
          lineHeight: '1.4',
        },
      '& .vehicle-components-list p, & .fleet-caption p, & .pricing-list p, & .journey-columns p, & .about-benefits p, & .faq-list .faq-answer p, & .section-heading p, & .vehicle-components-heading p, & .fleet-details p, & .safety-note p, & .help-callout p':
        {
          fontSize: '15px',
          lineHeight: '1.65',
        },
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
    '& .home-hero': {
      isolation: 'isolate',
    },
    '& .home-hero-content': {
      position: 'relative',
      zIndex: '3',
    },
    '& .home-hero-title-line, & .page-hero-title-line, & .fleet-hero-title-line':
      {
        display: 'block',
        transformOrigin: 'left center',
      },
    '& .motorcycle-tile-wrap': {
      perspective: '1200px',
      transformStyle: 'preserve-3d',
    },
    '& .tile-lime-orbit': {
      position: 'absolute',
      zIndex: '2',
      top: '10%',
      right: '8%',
      width: '260px',
      aspectRatio: '1',
      borderRadius: '50%',
      pointerEvents: 'none',
      background:
        'radial-gradient(circle, rgb(153 255 24 / 24%) 0%, rgb(153 255 24 / 8%) 34%, transparent 70%)',
      filter: 'blur(8px)',
    },
    '& .motorcycle-tile .tile-caption': {
      zIndex: '3',
    },
    '& .motorcycle-tile-poster': {
      zIndex: '0',
    },
    '& .motorcycle-tile-video': {
      position: 'absolute',
      zIndex: '1',
      inset: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      opacity: '0',
      transition: 'opacity 300ms ease-out',
    },
    '& .motorcycle-tile-video.is-ready': {
      opacity: '1',
    },
    '& .fleet-intro': {
      zIndex: '3',
    },
    // Keep the About page's content sections on one vertical rhythm, without
    // the divider rules that previously separated those sections.
    '& .page-about .about-benefits, & .page-about .kronos-collaboration, & .page-about .about-proof, & .page-about .factory-capabilities, & .page-about .manufacturing-gallery, & .page-about .brand-events':
      {
        padding: 'clamp(48px, 7vw, 104px) 0',
        borderTop: 0,
      },
    '& .page-about .manufacturing-gallery-heading, & .page-about .events-gallery-heading, & .page-about .kronos-press-sources':
      {
        paddingTop: 0,
        borderTop: 0,
      },
    '& .button, & .round-arrow, & .icon-button': {
      transition:
        'transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease',
    },
    '& .button:hover, & .round-arrow:hover, & .icon-button:hover': {
      transform: 'translateY(-2px)',
    },
    '& .button:active, & .round-arrow:active, & .icon-button:active': {
      transform: 'translateY(0) scale(0.96)',
    },
    '& .journey-columns article, & .about-benefits article, & .vehicle-components-list li, & .vehicle-care-list article, & .about-proof-list article, & .pricing-list article, & .faq-list .faq-item':
      {
        transition:
          'transform 240ms cubic-bezier(0.16, 1, 0.3, 1), border-color 240ms ease, background-color 240ms ease, box-shadow 240ms ease',
      },
    '& .journey-columns article:hover, & .lower-home .journey-columns article:hover, & .about-benefits article:hover, & .vehicle-components-list li:hover, & .vehicle-care-list article:hover, & .about-proof-list article:hover, & .pricing-list article:hover':
      {
        position: 'relative',
        zIndex: '1',
        transform: 'translateY(-6px) scale(1.012) !important',
        borderColor: 'rgb(153 255 24 / 72%)',
        backgroundColor: 'rgb(153 255 24 / 3%)',
        boxShadow:
          'inset 0 0 0 1px rgb(153 255 24 / 72%), 0 18px 40px rgb(0 0 0 / 22%)',
      },
    '& .vehicle-components-list li:hover, & .vehicle-care-list article:hover, & .about-proof-list article:hover':
      {
        transform: 'none !important',
      },
    '& .vehicle-components-list li:hover': {
      borderColor: '#2a3027',
      backgroundColor: 'rgb(153 255 24 / 3%)',
      boxShadow: 'none',
      outline: '1px solid rgb(153 255 24 / 72%)',
      outlineOffset: '-1px',
    },
    '& .pricing-list article': {
      padding: '25px !important',
      minHeight: '0 !important',
    },
    '& .pricing-list .journey-title h3': {
      fontSize: '23px !important',
      lineHeight: '1.35 !important',
      fontWeight: '600',
      letterSpacing: '-0.025em',
    },
    '& .pricing-list article > p': {
      marginTop: '17px !important',
      paddingRight: '82px !important',
      maxWidth: 'none !important',
      fontSize: '16px !important',
      lineHeight: '1.6 !important',
    },
    '& .pricing-list .pricing-card-icon': {
      top: 'auto !important',
      right: '18px !important',
      bottom: '18px !important',
      width: '64px !important',
      height: '64px !important',
      transform: 'none !important',
    },
    '& .vehicle-care-list article:hover': {
      // Match the component grid hover tone exactly. The care cards have their
      // own opaque base, so applying the shared transparent lime overlay here
      // would otherwise produce a lighter green.
      backgroundColor: '#0c1108 !important',
      boxShadow: 'none',
      outline: '1px solid rgb(153 255 24 / 72%)',
      outlineOffset: '-1px',
    },
    '& .manufacturing-gallery figure img, & .events-gallery-grid figure img': {
      transition:
        'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), filter 300ms ease',
    },
    '& .manufacturing-gallery figure:hover img, & .events-gallery-grid figure:hover img':
      {
        transform: 'scale(1.035)',
        filter: 'saturate(1) contrast(1.05)',
      },
    '& .faq-list .faq-item:hover': {
      borderColor: 'rgb(153 255 24 / 42%)',
      background: 'rgb(153 255 24 / 3%)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '& .motion-target.motion-enter': {
        animation: 'none',
      },
      '& .button:hover, & .round-arrow:hover, & .icon-button:hover, & .journey-columns article:hover, & .about-benefits article:hover, & .vehicle-care-list article:hover, & .about-proof-list article:hover, & .pricing-list article:hover, & .manufacturing-gallery figure:hover img, & .events-gallery-grid figure:hover img, & .brand-events-list li:hover img':
        {
          transform: 'none',
        },
    },
    '@media (max-width: 767px)': {
      '& .tile-lime-orbit': {
        width: '180px',
      },
    },
  },
];
