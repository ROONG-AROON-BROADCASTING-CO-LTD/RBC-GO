import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const pagesSx = [
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
] satisfies SxProps<Theme>;
