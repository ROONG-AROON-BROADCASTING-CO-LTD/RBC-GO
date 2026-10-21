import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const responsivePagesSx = [
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
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
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
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
      },
      '& .about-hero::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        zIndex: '1',
        background:
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
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
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
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
        objectPosition: '78% center',
      },
      '& .motorcycle-hero .motorcycle-shade': {
        background:
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
      },
      '& .about-hero > img': {
        height: '640px !important',
        bottom: 'auto !important',
        objectPosition: '75% center',
      },
      '& .about-hero::after': {
        content: '""',
        position: 'absolute',
        top: '320px',
        left: '0',
        right: '0',
        height: '320px',
        zIndex: '0',
        background:
          'linear-gradient(0deg, #080a08 0%, rgb(8 10 8 / 92%) 12%, rgb(8 10 8 / 42%) 25%, transparent 42%), linear-gradient(90deg, rgb(0 0 0 / 88%) 0%, rgb(0 0 0 / 47%) 52%, transparent 100%)',
        pointerEvents: 'none',
      },
      '& .about-copy': {
        position: 'relative',
        left: 'auto',
        right: 'auto',
        top: 'auto',
        bottom: 'auto',
        // Keep About's title aligned with the shared mobile hero title line.
        // The negative bottom margin removes the matching flow-space before
        // the benefit cards without changing that visual title position.
        transform: 'translateY(-48px)',
        marginBottom: '-48px',
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
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '39px',
      height: '39px',
      borderRadius: '50%',
      background: 'var(--lime)',
      color: '#0c1105',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '0.02em',
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
      aspectRatio: '1478 / 1108',
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
      aspectRatio: '1440 / 1077',
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
      aspectRatio: '600 / 397',
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
    // Match the shared 48px vertical rhythm used by the standard content
    // sections, while keeping the About page free of section dividers.
    '& .page-about .about-benefits, & .page-about .kronos-collaboration, & .page-about .about-proof, & .page-about .factory-capabilities, & .page-about .manufacturing-gallery, & .page-about .brand-events':
      {
        padding: '48px 0',
        borderTop: 0,
      },
    '& .page-about .manufacturing-gallery-heading, & .page-about .events-gallery-heading, & .page-about .kronos-press-sources':
      {
        paddingTop: 0,
        borderTop: 0,
      },
    // Every About-page section uses the same eyebrow, title, and supporting
    // copy rhythm, including the gallery and press sub-sections.
    '& .page-about .about-section-heading': {
      display: 'block',
      width: 'min(100%, 640px)',
      maxWidth: 'none',
    },
    '& .page-about .about-section-heading .eyebrow': {
      display: 'block',
      marginBottom: '14px',
      fontSize: '15px',
    },
    '& .page-about .about-section-heading h2, & .page-about .about-section-heading h3':
      {
        marginTop: 0,
        fontSize: '36px',
        fontWeight: '600',
        lineHeight: '1.18',
        letterSpacing: '0.01em',
      },
    '& .page-about .about-section-heading > p': {
      marginTop: '12px',
      maxWidth: 'none',
      color: '#c1c3bc',
      fontSize: '16px',
      lineHeight: '1.65',
    },
    '& .page-about .kronos-collaboration-copy': {
      width: 'min(100%, 760px)',
    },
    '& .page-about .kronos-collaboration-copy h2': {
      maxWidth: 'none',
      whiteSpace: 'nowrap',
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
    '& .factory-facts article, & .factory-location, & .factory-capability-list article':
      {
        transition:
          'transform 240ms cubic-bezier(0.16, 1, 0.3, 1), border-color 240ms ease, background 240ms ease, box-shadow 240ms ease',
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
    '& .factory-facts article:hover, & .factory-location:hover, & .factory-capability-list article:hover':
      {
        position: 'relative',
        zIndex: '1',
        transform: 'translateY(-6px) scale(1.012)',
        borderColor: 'rgb(153 255 24 / 72%)',
        background: 'rgb(153 255 24 / 3%)',
        boxShadow:
          'inset 0 0 0 1px rgb(153 255 24 / 72%), 0 18px 40px rgb(0 0 0 / 22%)',
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
    '& .eyebrow': {
      fontSize: '15px !important',
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
      '& .page-about .about-benefits': {
        paddingTop: '25px',
      },
      '& .page-about .kronos-collaboration-copy': {
        width: '100%',
      },
      '& .page-about .kronos-collaboration-copy h2': {
        whiteSpace: 'normal',
      },
    },
  },
] satisfies SxProps<Theme>;
