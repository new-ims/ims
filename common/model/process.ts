import { AmbulatoryHealthClaimProcess } from "./ambulatory-health-claim-process";
import { NursingClaimProcess } from "./model.types";

export type Process = AmbulatoryHealthClaimProcess | NursingClaimProcess;
export type ProcessType = Process['processType'];

export type ProcessOfType<T extends ProcessType> = Extract<Process, { processType: T }>;
