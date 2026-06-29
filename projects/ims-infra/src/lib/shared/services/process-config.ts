import { InjectionToken, Type } from "@angular/core";
import { Model } from "@common";

export interface ProcessStep {
    readonly id: string;
    readonly label: string;
    readonly component: Type<any>;

}

export interface ProcessConfig {
    readonly processType: Model.ProcessType;
    readonly steps: ProcessStep[];
}

export type ProcessConfiger = () => ProcessConfig;
export type Registry = (processType: Model.ProcessType) => Promise<ProcessConfiger>;
export const REGISTRY_TOKEN = new InjectionToken<Registry>('REGISTRY_TOKEN');
