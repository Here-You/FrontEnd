import { mateLookHandlers } from './mate-look';
import { mateSearchHandlers } from './mate-search-result';
import { travelHandlers } from './travel-place';

export const handlers = [
  ...travelHandlers,
  ...mateSearchHandlers,
  ...mateLookHandlers,
];
