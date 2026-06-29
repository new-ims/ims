import { Model } from '../model';
import { ProcessServiceOutputBase } from './bases';

export interface GetProcessInput {
    readonly processKey: number;
    readonly processType: Model.ProcessType;
    readonly readonlyLevel: "NONE";
    readonly type: "AMBULATORY_HEALTH_CLAIM";
}

export interface GetProcessOutput extends ProcessServiceOutputBase {
}