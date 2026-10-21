import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const foundationSx = [
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
] satisfies SxProps<Theme>;
