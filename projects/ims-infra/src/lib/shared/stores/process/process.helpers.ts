import { Model } from "@common";
import { StepTab } from "../config/config.slice";
import { PROCESS_KNOWN } from "@ims";

export interface StepState extends StepTab {
    readonly state: 'disabled' | 'enabled' | 'selected';
}

export function buildStepStates(configSteps: StepTab[], process: Model.Process | null): StepState[] {
    // we read two important details from the process
    // stepName - the name of the latest enabled step
    // selectedTab - the name of the currently selected step

    // we decide what is enabled by the stepName
    // we decide what is selected by the selected tab
    // BUT - if there is no selected, then we decide that the selected tab is the 
    // latest enabled

    if (process === null) return [];

    const indexOfEnabled = configSteps.findIndex(s => s.name === process.stepName);
    const enabledIndex = indexOfEnabled === -1 ? 0 : indexOfEnabled;
    const indexOfSelected = configSteps.findIndex(s => s.name === process.selectedTab);
    const selectedIndex = indexOfSelected === -1 ? enabledIndex : indexOfSelected;

    const states: (StepState | null)[] = configSteps.map((step, index) => {
        if (index === selectedIndex) return {...step, state: 'selected'};
        if (!shouldBeVisible(process, step)) return null;
        
        // it's visible and not selected, so now lets decide about enabled
        if (index <= enabledIndex) return {...step, state: 'enabled'};
        return {...step, state: 'disabled'};
    });

    return states.filter(s => s !== null);
}

export function shouldBeVisible(process: Model.Process, tab: StepTab): boolean {
    // if the tab is approval, but we are not in approval task, then do not show it
    // otherwise, show it

    if ((tab.name === PROCESS_KNOWN.APPROVAL_STEP) && 
        (process.taskName !== PROCESS_KNOWN.APPROVAL_TASK)) return false;

    return true;
}