import { Model } from '../model';

export interface GetProcessInput {
    readonly processKey: number;
    readonly processType: "AMBULATORY_HEALTH_CLAIM";
    readonly readonlyLevel: "NONE";
    readonly type: "AMBULATORY_HEALTH_CLAIM";
}

export interface GetProcessOutput {
    readonly resultCode: number;
    readonly resultDesc: string;
    readonly messages: Model.Message[];
    readonly failed: boolean;
    readonly baseProcess: Model.Root;
    readonly processMessage: Model.ProcessMessage[];
    readonly invalidTabString: string[];
}