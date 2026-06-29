import { InjectionToken, Type } from "@angular/core";
import { Model } from "@common";
import { MaybeAsyncVoid } from "../../../tools";


export type OnEnterHook = () => MaybeAsyncVoid;
export type OnCompleteHook = () => MaybeAsyncVoid;

export interface ProcessStep {
    readonly id: string;
    readonly label: string;
    readonly component: Type<any>;
    readonly onEnter?: OnEnterHook;
    readonly onComplete?: OnCompleteHook;

}

export interface ProcessConfig {
    readonly processType: Model.ProcessType;
    readonly steps: ProcessStep[];
}

export type ProcessConfiger = () => ProcessConfig;
export type Registry = (processType: Model.ProcessType) => Promise<ProcessConfiger>;
export const REGISTRY_TOKEN = new InjectionToken<Registry>('REGISTRY_TOKEN');
