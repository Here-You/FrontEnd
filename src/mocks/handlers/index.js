import { MateInviteHandlers } from './MateInviteHandlers';
import { MateRuleDetailCheckHandlers } from './MateRuleDetailCheckHandlers';
import { MateRuleListHandlers } from './MateRuleListHandlers';
import { PreviewHandlers } from './PreviewHandler';
import { PreviewHandlers2 } from './PreviewHandlers2';
import { ExploreHandlers } from './explore';
import { HomeHandlers } from './home';
import { MateHandlers } from './mate';
import { mateLookHandlers } from './mate-look';
import { mateManagementHandlers } from './mate-management';
import { mateSearchHandlers } from './mate-search-result';
import { ProfileHandlers } from './profile';
import { profileInfoHandlers } from './profile-info';
import { SignatureHandlers } from './signature';
import { travelHandlers } from './travel-place';

export const handlers = [
  ...travelHandlers,
  ...mateSearchHandlers,
  ...mateLookHandlers,
  ...PreviewHandlers,
  ...mateManagementHandlers,
  ...MateRuleListHandlers,
  ...MateInviteHandlers,
  ...MateRuleDetailCheckHandlers,
  ...profileInfoHandlers,
  ...PreviewHandlers2,
  ...HomeHandlers,
  ...ExploreHandlers,
  ...MateHandlers,
  ...ProfileHandlers,
  ...SignatureHandlers,
];
