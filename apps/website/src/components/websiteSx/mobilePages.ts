import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const mobilePagesSx = [
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
        gap: '16px',
      },
    },
  },
  {
    '@media (max-width: 767px)': {
      '& .pricing-list article': {
        gap: '20px',
        marginBottom: '0',
        padding: '20px',
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
        border: '1px solid var(--line)',
        padding: '26px 24px 28px',
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
] satisfies SxProps<Theme>;
