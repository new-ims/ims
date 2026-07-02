import { Model } from "@common";
import { StepTab } from "../config/config.slice";

export interface StepState extends StepTab {
    readonly isSelected: boolean;
    readonly isVisible: boolean;
    readonly isEnabled: boolean;
}

export function buildStepStates(configSteps: StepTab[], process: Model.Process | null) {
    
}