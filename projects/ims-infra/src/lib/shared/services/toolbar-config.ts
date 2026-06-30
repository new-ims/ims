import { ProcessHistoricalToolbar, ProcessRegularToolbar } from "./process-config";

export const defaultRegularToolbar: ProcessRegularToolbar = {
    cancelProcess: () => {}, 
    comments: () => {},
    contactCustomerService: () => {},
    editInsured: () => {},
    irregularMark: () => {},
    redIrregularMark: () => {},
    deficienciesLetter: () => {},
    openSubprocess: () => {},
    splitProcess: () => {},
    saveProcess: () => {}
}

export const defaultHistoricalToolbar: ProcessHistoricalToolbar = {
    refreshProcess: () => {},
    resetWaitingPeriod: () => {},
    updatingWaitingPeriod: () => {},
    cancelProcess: () => {}, 
    comments: () => {},
    contactCustomerService: () => {}
}
