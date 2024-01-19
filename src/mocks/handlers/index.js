import { mateLookHandlers } from './mate-look';
import { mateSearchHandlers } from './mate-search-result';
import { PreveiewHandlers } from './previewHandlers';
import { travelHandlers } from './travel-place';

export const handlers = [
  ...travelHandlers,
  ...mateSearchHandlers,
  ...mateLookHandlers,
  ...PreveiewHandlers,
];
