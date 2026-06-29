import { Model } from "@common";

export interface ProcessConfig {
    readonly processType: Model.ProcessType;
    readonly steps: string[];
}