import { ProcessConfig } from "@ims";

export interface ConfigSlice {
    readonly config: ProcessConfig | null;
}

export const initialConfigSlice: ConfigSlice = {
    config: null
}

