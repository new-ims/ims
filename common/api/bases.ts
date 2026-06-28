import { Model } from "../model";

export interface OutputBase {
    readonly resultCode: number;
    readonly resultDesc: string;
    readonly messages: Model.Message[];
    readonly failed: boolean;

}

export interface ProcessServiceOutputBase extends OutputBase {
    readonly baseProcess: Model.Root;
    readonly processMessage: Model.ProcessMessage[];
    readonly invalidTabString: string[];
}