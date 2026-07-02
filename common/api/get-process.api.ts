import { Model } from '../model';
import { ProcessServiceOutputBase } from './bases';

export interface GetProcessInput<T extends Model.ProcessType> {
    readonly processKey: number;
    readonly processType: T;
    readonly readonlyLevel: "NONE";
    readonly type: T;
}

export interface GetProcessOutput<T extends Model.ProcessType>  
extends ProcessServiceOutputBase<T> {
}