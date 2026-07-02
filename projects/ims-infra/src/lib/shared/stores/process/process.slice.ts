import { Model } from "@common";

export interface ProcessSlice {
    readonly process: Model.Process | null;
}

export const initialProcessSlice: ProcessSlice = {
    process: null,
};