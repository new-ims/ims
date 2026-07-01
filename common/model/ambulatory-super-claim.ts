// Auto-generated from samples/model.json

import type { AmbulatoryOperativeClaim } from './ambulatory-operative-claim';
import type { BaseSuperClaim } from './base-super-claim';

export interface AmbulatorySuperClaim extends BaseSuperClaim {
  readonly operativeClaims: AmbulatoryOperativeClaim[];
}
