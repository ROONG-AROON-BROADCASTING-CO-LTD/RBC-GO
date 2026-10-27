import type { SxProps, Theme } from '@mui/material/styles';
import { sharedSx } from './websiteSx/shared';
import { footerSx } from './websiteSx/footer';
import { eventsSx } from './websiteSx/events';
import { refinementsSx } from './websiteSx/refinements';

// Preserve cascade order; only styles used by the current website are included.
export const websiteSx = [
  ...sharedSx,
  ...footerSx,
  ...eventsSx,
  ...refinementsSx,
] as SxProps<Theme>;
