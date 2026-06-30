import { ProcessConfig, ToolbarAction } from "../../services/process-config";
import { defaultHistoricalToolbar, defaultRegularToolbar } from "../../services/toolbar-config";
import { ConfigSlice, ToolbarButton } from "./config.slice";


export type ToolbarId = keyof (typeof defaultRegularToolbar & typeof defaultHistoricalToolbar);
export const TOOLBAR_BUTTONS: Record<ToolbarId, ToolbarButton> = {
    cancelProcess: { id: "cancelProcess", label: "ביטול תהליך" },
    comments: { id: "comments", label: "הערות" },
    contactCustomerService: { id: "contactCustomerService", label: "צור קשר עם שירות לקוחות" },
    deficienciesLetter: { id: "deficienciesLetter", label: "מכתב ליקויים" },
    editInsured: { id: "editInsured", label: "ערוך מבוטח" },
    irregularMark: { id: "irregularMark", label: "סימון חריג" },
    redIrregularMark: { id: "redIrregularMark", label: "סימון חריג אדום" },
    openSubprocess: { id: "openSubprocess", label: "פתח תת-תהליך" },
    subprocess: { id: "subprocess", label: "תת-תהליך" },
    letter: { id: "letter", label: "מכתב" },
    processConsultation: { id: "processConsultation", label: "התייעצות תהליך" },
    saveProcess: { id: "saveProcess", label: "שמירת תהליך" },
    splitProcess: { id: "splitProcess", label: "פיצול תהליך" },
    updatingWaitingPeriod: { id: "updatingWaitingPeriod", label: "עדכון תקופת המתנה" },
    refreshProcess: { id: "refreshProcess", label: "רענון תהליך" },
    resetWaitingPeriod: { id: "resetWaitingPeriod", label: "איפוס תקופת המתנה" }
}

export function configSliceFromProcessConfig(processConfig: ProcessConfig, isHistorical: boolean) {
    const infoTabs = processConfig.infos.map(info => ({
        id: info.id,
        label: info.label,
        component: info.component
    }));
    const stepTabs = processConfig.steps.map(step => ({
        id: step.id,
        label: step.label,
        component: step.component
    }));

    const toolbarButtons: ToolbarButton[] = isHistorical
        ? getHistoricalToolbar(processConfig)
        : getRegularToolbar(processConfig);

    return {
        stepTabs,
        infoTabs,
        toolbarButtons
    };
}

export function getHistoricalToolbar(processConfig: ProcessConfig): ToolbarButton[] {
    const defaults = defaultHistoricalToolbar;
    const toolbar = processConfig.historicalToolbar 
        ? processConfig.historicalToolbar(defaults) 
        : defaults;

    const actions = Object.entries(toolbar)
        .filter(([_, action]) => action !== null)
        .map(([id, _]) => id as ToolbarId)
        .map(id => TOOLBAR_BUTTONS[id]);    

    return actions;
}

export function getRegularToolbar(processConfig: ProcessConfig): ToolbarButton[] {
    const defaults = defaultRegularToolbar;
    const toolbar = processConfig.regularToolbar 
        ? processConfig.regularToolbar(defaults) 
        : defaults;

    const actions = Object.entries(toolbar)
        .filter(([_, action]) => action !== null)
        .map(([id, _]) => id as ToolbarId)
        .map(id => TOOLBAR_BUTTONS[id]);

    return actions;
}