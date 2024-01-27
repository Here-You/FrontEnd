import { PreviewHandlers } from './PreviewHandler';
import { PreviewHandlers2 } from './PreviewHandlers2';
import { mapHandlers } from './map';
import { mateLookHandlers } from './mate-look';
import { mateManagementHandlers } from './mate-management';
import { mateSearchHandlers } from './mate-search-result';
import { profileInfoHandlers } from './profile-info';
import { travelHandlers } from './travel-place';

export const handlers = [
  ...travelHandlers,
  ...mateSearchHandlers,
  ...mateLookHandlers,
  ...PreviewHandlers,
  ...mateManagementHandlers,
  ...profileInfoHandlers,
  ...PreviewHandlers2,
  ...mapHandlers,
];
