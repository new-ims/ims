import { InjectionToken } from "@angular/core";
import { Model } from "@common";

export interface ProcessConfig {
    readonly processType: Model.ProcessType;
    readonly steps: string[];
}

export type ProcessConfiger = () => ProcessConfig;
export type Registry = (processType: Model.ProcessType) => Promise<ProcessConfiger>;
export const REGISTRY_TOKEN = new InjectionToken<Registry>('REGISTRY_TOKEN');
