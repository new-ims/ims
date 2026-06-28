import { ProcessServiceOutputBase } from './bases';

export interface GetProcessInput {
    readonly processKey: number;
    readonly processType: "AMBULATORY_HEALTH_CLAIM";
    readonly readonlyLevel: "NONE";
    readonly type: "AMBULATORY_HEALTH_CLAIM";
}

export interface GetProcessOutput extends ProcessServiceOutputBase {
}