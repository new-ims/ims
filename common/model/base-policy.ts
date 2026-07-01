import type { Agent } from "./agent";
import type { Company } from "./model.types";
import type { ISODateTimeString } from "./atoms";
import type { ScaledNumber } from "./scaled-number";

export interface BasePolicy {
    readonly "@class": string;
      readonly policyId: number;
  readonly company: Company;
    readonly factoryId: number;
  readonly fundId: number;
  readonly agent: Agent;
  readonly insuranceStartDate: ISODateTimeString;
  readonly claimOpeningCode: number;
  readonly pensionType: number;
  readonly retirementType: number;
  readonly pensionInvestmentCode: number;
  readonly pensionPlan: number;
    readonly transferFund: number;
  readonly paymentType: number;
  readonly investmentType: number;
  readonly msTzuratTashlum: ScaledNumber;
  readonly minMonthlyPromise: number;
  readonly pensionFund: number;
  readonly currentFund: number;
  readonly statusDescription: string;
  readonly orderId: number;
  readonly requestAmount: ScaledNumber;
  readonly inProcess: boolean;
  readonly kycCheck: boolean;
}
