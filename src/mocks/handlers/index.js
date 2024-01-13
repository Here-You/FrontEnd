import { mateSearchHandlers } from './mate-serach-result';
import { travelHandlers } from './travel-place';

export const handlers = [...travelHandlers, ...mateSearchHandlers];
