// Public website styles owned by the website component boundary.
// Keep the ordered sx array: later responsive rules intentionally override earlier rules.
import type { SxProps, Theme } from '@mui/material/styles';

export const websiteSx: SxProps<Theme> = [
  {
    '& .icon': {
      display: 'inline-block',
      width: '26px',
      height: '26px',
      flexShrink: '0',
      background: 'currentColor',
      maskImage: 'var(--icon-url)',
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      verticalAlign: 'middle',
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
      overflow: 'visible',
      transition:
        'height 220ms ease, background-color 220ms ease, backdrop-filter 220ms ease',
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
        'height 220ms ease, opacity 160ms ease, border-color 160ms ease, padding 220ms ease',
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
    },
  },
  {
    '& .brand': {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      fontSize: '13px',
      fontWeight: '700',
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
      boxShadow: '0 0 18px rgb(78 255 0 / 18%)',
    },
  },
  {
    '& .desktop-nav': {
      display: 'flex',
      gap: 'clamp(20px, 2.3vw, 42px)',
      fontSize: '15px',
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
      border: '1px solid rgb(226 227 222 / 55%)',
      borderRadius: '10px',
      background: 'rgb(255 255 255 / 3%)',
      fontFamily: 'var(--font-kanit), sans-serif',
      fontSize: '12px',
      fontWeight: '400',
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
        height: '36px',
        minHeight: '36px',
        padding: '0 10px',
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
      fontWeight: '700',
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
      background: '#c7f436',
    },
  },
  {
    '& .header-start': {
      minHeight: '40px',
      padding: '9px 16px',
      borderRadius: '10px',
      fontSize: '13px',
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
      fontWeight: '400',
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
    },
  },
  {
    '& .home-hero > video': {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 55%',
    },
  },
  {
    '& .home-hero-overlay': {
      position: 'absolute',
      inset: '0',
      background:
        'linear-gradient(90deg, rgb(0 0 0 / 76%) 0%, rgb(0 0 0 / 49%) 37%, rgb(0 0 0 / 8%) 75%), linear-gradient(0deg, rgb(0 0 0 / 20%), transparent 40%)',
    },
  },
  {
    '& .home-hero-content': {
      position: 'relative',
      zIndex: '1',
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
      fontWeight: '400',
      lineHeight: '1.1',
      letterSpacing: '-0.05em',
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
    },
  },
  {
    '& .vehicle-components-list li': {
      display: 'flex',
      gap: '16px',
      minHeight: '138px',
      padding: '25px 22px',
      borderRight: '1px solid #2a3027',
      borderBottom: '1px solid #2a3027',
    },
  },
  {
    '& .vehicle-components-list li:nth-child(3n)': {
      borderRight: '0',
    },
  },
  {
    '& .vehicle-components-list li > span': {
      flex: '0 0 auto',
      color: 'var(--lime)',
      fontFamily: 'var(--font-inter), sans-serif',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.08em',
      paddingTop: '5px',
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
      width: '39px',
      height: '39px',
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
      paddingRight: '35px',
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
    },
  },
  {
    '& .safety-note': {
      display: 'flex',
      gap: '25px',
      alignItems: 'center',
      borderTop: '1px solid var(--line)',
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
      display: 'grid',
      gridTemplateColumns: '58% 42%',
      gap: '0',
      marginTop: '60px',
    },
  },
  {
    '& .pricing-list': {
      borderRight: '1px solid var(--line)',
      paddingRight: '65px',
    },
  },
  {
    '& .pricing-list article': {
      display: 'flex',
      alignItems: 'start',
      gap: '28px',
      marginBottom: '35px',
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
      width: '56px',
      height: '56px',
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
      fontSize: '19px',
      marginTop: '12px',
      lineHeight: '1.4',
      maxWidth: '510px',
    },
  },
  {
    '& .rate-notice': {
      display: 'flex',
      gap: '25px',
      background: 'var(--surface)',
      borderRadius: '26px',
      marginLeft: '50px',
      padding: '40px',
      alignSelf: 'start',
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
      fontWeight: '400',
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
      display: 'flex',
      gap: '26px',
      border: '1px solid var(--line)',
      borderRadius: '20px',
      padding: '34px 30px 38px',
      minHeight: '0',
    },
  },
  {
    '& .about-benefits .icon': {
      width: '57px',
      height: '57px',
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
      fontSize: '18px',
      marginTop: '14px',
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
      gap: '20px',
      background: 'var(--surface)',
      borderRadius: '50px',
      padding: '15px 24px',
    },
  },
  {
    '& .search .icon': {
      color: 'var(--lime)',
      width: '32px',
      height: '32px',
    },
  },
  {
    '& .search input': {
      background: 'none',
      border: '0',
      color: 'white',
      width: '100%',
      fontSize: '19px',
      padding: '8px 0',
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
    '& .faq-list details': {
      borderTop: '1px solid var(--line)',
      padding: '23px 17px',
    },
  },
  {
    '& .faq-list details:last-child': {
      borderBottom: '1px solid var(--line)',
    },
  },
  {
    '& .faq-list summary': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '25px',
      fontSize: '22px',
      color: '#d9dcd2',
      cursor: 'pointer',
      listStyle: 'none',
    },
  },
  {
    '& .faq-list summary::-webkit-details-marker': {
      display: 'none',
    },
  },
  {
    '& .faq-list summary .icon': {
      color: 'var(--lime)',
      width: '24px',
      height: '24px',
      transition: 'transform 0.2s',
    },
  },
  {
    '& .faq-list details[open] summary .icon': {
      transform: 'rotate(90deg)',
    },
  },
  {
    '& .faq-list details p': {
      fontSize: '16px',
      lineHeight: '1.5',
      marginTop: '16px',
      maxWidth: '1050px',
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
      overflow: 'hidden',
      borderRadius: '12px',
      padding: '48px 65px',
      minHeight: '320px',
      gap: '40px',
    },
  },
  {
    '& .closing-cta > img': {
      objectFit: 'cover',
      objectPosition: 'right bottom',
      zIndex: '0',
    },
  },
  {
    '& .closing-cta h2': {
      position: 'relative',
      fontSize: '45px',
      fontWeight: '600',
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
      '& .brand': {
        fontSize: '31px',
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
        paddingInline: '55px',
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
      '& .about-benefits .icon': {
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
      '& .lower-home': {
        paddingInline: '45px',
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
        width: '30px',
        height: '30px',
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
        minHeight: '640px',
        margin: '0',
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
        padding: '0 24px 62px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .home-hero h1': {
        fontSize: 'clamp(46px, 10vw, 64px)',
        lineHeight: '1.1',
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
    '@media (max-width: 767px)': {
      '& .site-header': {
        height: '104px',
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
    '@media (max-width: 767px)': {
      '& .brand': {
        fontSize: '22px',
        gap: '9px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .brand-logo': {
        width: '42px',
        height: '42px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .desktop-nav, & .header-start': {
        display: 'none',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .header-right': {
        gap: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .locale-switch': {
        fontSize: '12px',
        gap: '9px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .menu-toggle': {
        display: 'grid',
        placeItems: 'center',
        background: 'none',
        border: '1px solid var(--line)',
        borderRadius: '9px',
        width: '40px',
        height: '40px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .menu-toggle .icon': {
        width: '23px',
        height: '23px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .mobile-menu': {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '74px',
        left: '15px',
        right: '15px',
        background: '#151b12',
        zIndex: '10',
        border: '1px solid #48533c',
        borderRadius: '14px',
        padding: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .mobile-menu > a:not(.mobile-login)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--line)',
        padding: '15px 0',
        fontSize: '17px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
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
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .vehicle-components-list li': {
        minHeight: '0',
        padding: '19px 0',
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
        padding: '40px 22px 0',
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
        width: '35px',
        height: '35px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .with-phones': {
        marginTop: '36px',
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
        padding: '0 0 25px',
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
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-list article': {
        gap: '20px',
        marginBottom: '30px',
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
        padding: '32px 22px',
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
      '& .about-benefits .icon': {
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
      '& .faq-list details': {
        padding: '20px 5px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list summary': {
        fontSize: '15px',
        lineHeight: '1.4',
        gap: '20px',
        minHeight: '24px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list summary .icon': {
        width: '20px',
        height: '20px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .faq-list details p': {
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
        marginLeft: '50px',
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
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .closing-cta > img': {
        objectPosition: 'right bottom',
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
      minHeight: '84px',
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
        paddingTop: '30px',
      },
      '& .home-hero + .lower-home': {
        marginTop: '48px',
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
      '& .home-hero > video': { objectPosition: '61% center' },
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
    '& .footer-rail': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background:
        'linear-gradient(90deg, transparent 0%, rgb(212 255 64 / 30%) 18%, var(--lime) 50%, rgb(212 255 64 / 30%) 82%, transparent 100%)',
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
      minHeight: '78px',
      marginTop: 0,
      paddingTop: 0,
      alignItems: 'center',
      borderTop: '1px solid rgb(255 255 255 / 12%)',
      color: 'rgb(245 245 240 / 43%)',
      fontSize: '11px',
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
        objectPosition: 'center center',
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
        background: '#c7f436',
        boxShadow: '0 8px 20px rgb(0 0 0 / 18%)',
      },
      '& .help-callout .button:hover .animated-arrow svg': {
        transform: 'translateX(6px)',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .page-content': { position: 'relative' },
      '& .page-hero-visual': {
        position: 'absolute',
        top: '0',
        left: '50%',
        right: 'auto',
        width: '100vw',
        transform: 'translateX(-50%)',
        height: '620px',
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
        objectPosition: 'center center',
      },
      '& .page-content > *:not(.page-hero-visual)': {
        position: 'relative',
        zIndex: '1',
      },
      '& .page-content > .page-intro': { minHeight: '430px' },
      '& .home-hero h1, & .page-intro h1, & .fleet-intro h1, & .about-copy h1':
        {
          fontSize: 'clamp(32px, 8vw, 48px)',
        },
    },
  },
];
