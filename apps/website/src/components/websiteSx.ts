// Public website styles owned by the website component boundary.
// Modules are composed in their original order because later layers intentionally override earlier ones.
import type { SxProps, Theme } from '@mui/material/styles';
import { foundationSx } from './websiteSx/foundation';
import { homeSx } from './websiteSx/home';
import { pagesSx } from './websiteSx/pages';
import { tabletSx } from './websiteSx/tablet';
import { mobileNavigationFleetSx } from './websiteSx/mobileNavigationFleet';
import { mobileHomeSx } from './websiteSx/mobileHome';
import { mobilePagesSx } from './websiteSx/mobilePages';
import { responsiveFoundationSx } from './websiteSx/responsiveFoundation';
import { responsivePagesSx } from './websiteSx/responsivePages';

export const websiteSx = [
  ...foundationSx,
  ...homeSx,
  ...pagesSx,
  ...tabletSx,
  ...mobileNavigationFleetSx,
  ...mobileHomeSx,
  ...mobilePagesSx,
  ...responsiveFoundationSx,
  ...responsivePagesSx,
] as SxProps<Theme>;
