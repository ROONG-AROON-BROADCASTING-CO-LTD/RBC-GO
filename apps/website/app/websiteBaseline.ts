// Global document defaults owned by MUI CssBaseline.
export const websiteBaseline = {
  ':root': {
    '--bg': '#080a08',
    '--lime': '#4caf18',
    '--muted': '#c1c3bc',
    '--line': '#30332e',
    '--surface': '#1b1d1a',
  },
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'auto',
    overscrollBehaviorY: 'none',
  },
  body: {
    margin: '0',
    background: 'var(--bg)',
    color: '#f7f8f4',
    fontFamily: 'var(--font-inter), Arial, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    overscrollBehaviorY: 'none',
  },
  "html[lang='th'] body": {
    fontFamily: 'var(--font-kanit), Arial, sans-serif',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  'button,\ninput': {
    font: 'inherit',
  },
  button: {
    color: 'inherit',
    cursor: 'pointer',
  },
  'h1,\nh2,\nh3,\np': {
    margin: '0',
  },
  'h1,\nh2,\nh3': {
    fontWeight: '700',
    letterSpacing: '-0.04em',
  },
  p: {
    lineHeight: '1.5',
    color: 'var(--muted)',
  },
  'a:focus-visible,\nbutton:focus-visible,\nsummary:focus-visible,\ninput:focus-visible':
    {
      outline: '2px solid var(--lime)',
      outlineOffset: '5px',
    },
  'a,\nbutton': {
    WebkitTapHighlightColor: 'transparent',
  },
};
