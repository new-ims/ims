import { BaseProcess } from './base-process';
import { DocumentPackageExtension, ScaledNumber } from './model.types';

export interface ClaimProcess extends BaseProcess {
  readonly referantSerialNum: ScaledNumber;
  readonly referantUserId: number;
  readonly referantUserName: string;
  // superClaim: ISuperClaim;
  readonly getPoliciesDataFlag: boolean;
  readonly updateClaimsFlag: boolean;
  readonly deleteOperativeClaims: boolean;
  readonly claimDetailsUpdated: boolean;
  readonly calculatedDateOverided: boolean;
  readonly skipLetterValidation3: boolean;
  readonly illnessStartDateChangedFlag: boolean;
  readonly refreshDataAfterSuspend: boolean;
  readonly documentPackageExtension: DocumentPackageExtension;
}
