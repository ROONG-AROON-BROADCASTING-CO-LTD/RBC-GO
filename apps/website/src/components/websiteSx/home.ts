import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const homeSx = [
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
        'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
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
      // Reserve the specification artwork's space while its lazy image loads.
      aspectRatio: '1672 / 941',
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
] satisfies SxProps<Theme>;
