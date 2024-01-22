import { PreveiewHandlers } from './PreviewHandler';
import { mateLookHandlers } from './mate-look';
import { mateManagementHandlers } from './mate-management';
import { mateSearchHandlers } from './mate-search-result';
import { PreveiewHandlers } from './previewHandlers';
import { travelHandlers } from './travel-place';
import { profileInfoHandlers } from './profile-info';


export const handlers = [
  ...travelHandlers,
  ...mateSearchHandlers,
  ...mateLookHandlers,
  ...PreveiewHandlers,
  ...mateManagementHandlers,
  ...PreveiewHandlers,
  ...profileInfoHandlers
];



