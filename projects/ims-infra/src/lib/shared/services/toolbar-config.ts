import { ProcessRegularToolbar } from "./process-config";

export const defaultRegularToolbar: ProcessRegularToolbar = {    
 cancelProcess: {
      visible: true,
    },
    deficienciesLetter: {
      visible: true,
      disabled: false,
    },
    irregularMark: {
      visible: true,
      disabled: false,
    },
    redIrregularMark: {
      visible: true,
      disabled: false,
    },
    openSubProcess: {
      visible: true,
      disabled: false,
    },
    comments: {
      visible: true,
    },
    processConsultation: {
      disabled: false, // disabled in LIFE_CLAIMS
    },
    editInsured: {
      visible: true,
      disabled: false,
    },
    splitProcess: {
      visible: true,
      disabled: true,
    },
    subProcess: {
      visible: true,
      disabled: false,
      systemDisabled: false //insured-verification.service && pension-process-managenent.service
    },
    letter: {
      visible: true,
      disabled: false, //false as default, only processType.LOAN_CANCEL && LOAN_UPDATE && MIGDAL_PENSION has their logic
      systemDisabled: false //insured-verification.service && pension-process-managenent.service
    },
    saveProcess: {
      visible: true,
      systemDisabled: false
    }
}

export const defaultHistoricalToolbar: ProcessRegularToolbar = {
processConsultation: {
            disabled: false, // disabled in LIFE_CLAIMS
        },
        updateWaitingPeriod: {
            disabled: false
        },
        refreshProcess: {
            disabled: false
        },
        resetWaitingPeriod: {
            disabled: false
        },
}
