'use client';

import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { websiteBaseline } from './websiteBaseline';
import { websiteSx } from '../src/components/websiteSx';
import { WebsiteLanguageProvider } from '../src/components/WebsiteLanguageProvider';
import { WebsiteDocumentMetadata } from '../src/components/WebsiteDocumentMetadata';
import type { Locale } from '../src/data/landing';

const theme = createTheme({
  components: {
    MuiCssBaseline: { styleOverrides: websiteBaseline },
  },
  palette: {
    mode: 'dark',
    primary: { main: '#69d11a', contrastText: '#050706' },
    background: { default: '#050706', paper: '#141614' },
  },
  typography: {
    fontFamily: 'var(--font-ibm-plex-sans-thai), var(--font-inter), sans-serif',
    button: { textTransform: 'none', letterSpacing: 0 },
  },
});

export function WebsiteThemeProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Locale;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WebsiteLanguageProvider initialLanguage={initialLanguage}>
        <WebsiteDocumentMetadata />
        <Box sx={websiteSx}>{children}</Box>
      </WebsiteLanguageProvider>
    </ThemeProvider>
  );
}
