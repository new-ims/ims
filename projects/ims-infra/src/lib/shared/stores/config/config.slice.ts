import { Type } from "@angular/core";
import { Model } from "@common";

export interface ConfigSlice {
    readonly stepTabs: StepTab[];
    readonly infoTabs: InfoTab[];
    readonly toolbarButtons: ToolbarButton[];    
    readonly processType: Model.ProcessType | null;
    readonly processName: string;
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
    toolbarButtons: [], 
    processType: null, 
    processName: "",
}

