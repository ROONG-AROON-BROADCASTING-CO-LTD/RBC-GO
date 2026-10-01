'use client';
import type { ReactNode } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { tokens } from './tokens';
export { tokens } from './tokens';
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: tokens.colors.primary, contrastText: '#050706' },
    background: {
      default: tokens.colors.background,
      paper: tokens.colors.surface,
    },
    text: { primary: tokens.colors.text, secondary: tokens.colors.muted },
    error: { main: tokens.colors.error },
  },
  typography: {
    fontFamily: '"Noto Sans Thai", "Thonburi", system-ui, sans-serif',
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: tokens.radius },
  components: {
    MuiButton: { styleOverrides: { root: { minHeight: tokens.touchTarget } } },
  },
});
export function RBCProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
