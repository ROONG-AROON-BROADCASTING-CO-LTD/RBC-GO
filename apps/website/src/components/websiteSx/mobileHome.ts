import type { SxProps, Theme } from '@mui/material/styles';

// Ordered style layers from the original websiteSx array.
// Keep this module's position in websiteSx.ts when adding or moving rules.
export const mobileHomeSx = [
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
      '& .how-details-section': {
        paddingTop: '58px',
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
      '& .how-details-heading h2': {
        maxWidth: 'none',
      },
      '& .how-details-heading > div': {
        width: '100%',
      },
      '& .section-heading.how-details-heading p': {
        width: '100%',
        maxWidth: 'none',
      },
      '& .pricing-grid .section-heading h2, & .pricing-grid .section-heading p':
        {
          width: '100%',
          maxWidth: 'none',
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
        marginTop: '0',
      },
      '& .how-details-heading': {
        marginBottom: '25px',
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
] satisfies SxProps<Theme>;
