import { Type } from "@angular/core";
import { ProcessConfig } from "@ims";

export interface ConfigSlice {
    readonly stepTabs: StepTab[];
    readonly infoTabs: InfoTab[];
    readonly toolbarButtons: ToolbarButton[];    
}

export interface StepTab {
    readonly id: string;
    readonly label: string;
    readonly component: Type<any>;
}

export interface InfoTab {
    readonly id: string;
    readonly label: string;
    readonly component: Type<any>;
}

export interface ToolbarButton {
    readonly id: string;
    readonly label: string;
}

export const initialConfigSlice: ConfigSlice = {
    stepTabs: [],
    infoTabs: [],
    toolbarButtons: []
}

