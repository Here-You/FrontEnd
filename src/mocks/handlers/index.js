import { ExploreHandlers } from './explore';
import { HomeHandlers } from './home';
import { MateHandlers } from './mate';
import { ProfileHandlers } from './profile';
import { SignatureHandlers } from './signature';

export const handlers = [
  ...HomeHandlers,
  ...ExploreHandlers,
  ...MateHandlers,
  ...ProfileHandlers,
  ...SignatureHandlers,
];
