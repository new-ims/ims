import { BaseSuperClaim } from "./base-super-claim";

export interface NursingSuperClaim extends BaseSuperClaim {
  "@class": string;
  operativeClaims: INursingOperativeClaim[];
  otherClaimResult: number;
  otherClaim: number;
newSuperClaimType: number;
  needToCalculatePeriod: number;
  physicianDecisionHistList: ILifePhysicianDecision[];
  loadHistory: boolean;
  previousOperativeClaims: ILifeDisplayOperativeClaim[];
  physicianDecisions: ILifePhysicianDecision[];
  operativeClaims: ILifeOperativeClaim[];
  infoMessage: string;
}
