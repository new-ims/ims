import { InjectionToken, Type } from "@angular/core";
import { Model } from "@common";
import { MaybeAsyncVoid } from "../../../tools";




export type OnEnterHook = () => MaybeAsyncVoid;
export type OnCompleteHook = () => MaybeAsyncVoid;

export interface ProcessStep {
    readonly id: number;
    readonly name: string;
    readonly label: string;
    readonly alwaysEnabled?: boolean;
    readonly component: Type<any>;
    readonly onEnter?: OnEnterHook;
    readonly onComplete?: OnCompleteHook;

}

export interface ProcessInfo {
    readonly id: string;
    readonly label: string;
    readonly component: Type<any>;
}

export type ToolbarAction = (() => MaybeAsyncVoid) | null;

export interface ProcessToolbarBase {
    readonly processConsultation?: ToolbarAction;
    readonly comments?: ToolbarAction;
    readonly contactCustomerService?: ToolbarAction;
    readonly cancelProcess?: ToolbarAction;
}

export interface ProcessRegularToolbar extends ProcessToolbarBase {
    readonly irregularMark?: ToolbarAction;
    readonly redIrregularMark?: ToolbarAction;
    readonly deficienciesLetter?: ToolbarAction;
    readonly editInsured? : ToolbarAction;
    readonly openSubprocess?: ToolbarAction;
    readonly splitProcess?: ToolbarAction;
    readonly subprocess?: ProcessInfo;
    readonly letter?: ProcessInfo;
    readonly saveProcess?: ToolbarAction;
}

export interface ProcessHistoricalToolbar extends ProcessToolbarBase {
    readonly updatingWaitingPeriod: ToolbarAction;
    readonly refreshProcess: ToolbarAction;
    readonly resetWaitingPeriod: ToolbarAction;
}

export interface ProcessConfig {
    readonly processType: Model.ProcessType;
    readonly processName: string;
    readonly steps: ProcessStep[];
    readonly verifyInsured: boolean;
    readonly infos: ProcessInfo[];
    readonly regularToolbar?: (defaults: ProcessRegularToolbar) => ProcessRegularToolbar;
    readonly historicalToolbar?: (defaults: ProcessHistoricalToolbar) => ProcessHistoricalToolbar;
}

export type ProcessConfiger = () => ProcessConfig;
export type Registry = (processType: Model.ProcessType) => Promise<ProcessConfiger>;
export const REGISTRY_TOKEN = new InjectionToken<Registry>('REGISTRY_TOKEN');


export const PROCESS_KNOWN = {
    APPROVAL_STEP: 'approval',
    APPROVAL_TASK: 'APPROVAL',
    COMPLETED_TASK: 'COMPLETED',
    CANCELED_TASK: 'CANCELED'
}
