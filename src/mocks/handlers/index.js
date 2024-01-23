import { mateLookHandlers } from './mate-look';
import { mateManagementHandlers } from './mate-management';
import { mateSearchHandlers } from './mate-search-result';
import { PreveiewHandlers } from './previewHandlers';
import { profileInfoHandlers } from './profile-info';
import { travelHandlers } from './travel-place';

export const handlers = [
  ...travelHandlers,
  ...mateSearchHandlers,
  ...mateLookHandlers,
  ...PreveiewHandlers,
  ...mateManagementHandlers,
  ...PreveiewHandlers,
  ...profileInfoHandlers,
];
