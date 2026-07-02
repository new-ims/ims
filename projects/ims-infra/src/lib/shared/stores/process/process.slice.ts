import { Model } from "@common";

export interface ProcessSlice {
    readonly process: Model.Process | null;
    readonly isDirty: boolean;
    readonly selectedInfoTabId: string;
}

export type ProcessModifier = (process: Model.Process) => Partial<ProcessSlice>;

export const initialProcessSlice: ProcessSlice = {
    process: null,
    isDirty: false,
    selectedInfoTabId: "",
};