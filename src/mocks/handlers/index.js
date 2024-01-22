import { PreveiewHandlers } from './PreviewHandler';
import { mateLookHandlers } from './mate-look';
import { mateManagementHandlers } from './mate-management';
import { mateSearchHandlers } from './mate-search-result';
import { travelHandlers } from './travel-place';
import { profileInfoHandlers } from './profile-info';


export const handlers = [
  ...travelHandlers,
  ...mateSearchHandlers,
  ...mateLookHandlers,
  ...mateManagementHandlers,
  ...PreveiewHandlers,
  ...profileInfoHandlers
];



