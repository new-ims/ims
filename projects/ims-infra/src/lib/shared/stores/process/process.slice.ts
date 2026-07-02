import { Model } from "@common";
import { StepTab } from "../config/config.slice";

export interface ProcessSlice {
    readonly process: Model.Process | null;
    readonly isDirty: boolean;
}

export type ProcessModifier = (process: Model.Process) => Partial<ProcessSlice>;

export const initialProcessSlice: ProcessSlice = {
    process: null,
    isDirty: false,
};