import { Model } from "@common";
import { StepTab } from "../config/config.slice";

export interface StepState extends StepTab {
    readonly state: 'disabled' | 'enabled' | 'selected';
}

export function buildStepStates(configSteps: StepTab[], process: Model.Process | null): StepState[] {
    return [];    
}