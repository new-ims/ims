import { Model } from "../model";

export interface OutputBase {
    readonly resultCode: number;
    readonly resultDesc: string;
    readonly messages: Model.Message[];
    readonly failed: boolean;

}

export interface ProcessServiceOutputBase<T extends Model.ProcessType> extends OutputBase {
    readonly baseProcess: Model.ProcessOfType<T>;
    readonly processMessage: Model.ProcessMessage[];
    readonly invalidTabString: string[];
}