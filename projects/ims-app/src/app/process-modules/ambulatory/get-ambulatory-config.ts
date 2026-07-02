import { PROCESS_KNOWN, ProcessConfig } from "@ims";
import { DocumentStepComponent } from "./steps/document-step/document-step.component";
import { InsuredRequestStepComponent } from "./steps/insured-request-step/insured-request-step.component";
import { DocumentInfoComponent } from "./infos/document-info/document-info.component";
import { EnquiriesInfoComponent } from "./infos/enquiries-info/enquiries-info.component";

export function getAmbulatoryConfig(): ProcessConfig {
    return {
        processType: "AMBULATORY_HEALTH_CLAIM",
        processName: "תביעות בריאות אמבולטורי",
        steps: [
            {
                id: 'details', 
                label: 'פרטי תביעה',
                component: DocumentStepComponent
            },
            {
                id: 'document', 
                label: 'מסמכים',
                component: DocumentStepComponent, 
                onEnter: () => {
                    console.log('Entering document step');
                }, 
                onComplete: () => {
                    console.log('Completing document step');
                }
            }, 
            {
                id: 'insured-request', 
                label: 'בקשות מבוטח', 
                component: InsuredRequestStepComponent
            }, 
            {
                id: 'policies', 
                label: 'פוליסות',
                component: DocumentStepComponent
            }, 
            {
                id: 'decision', 
                label: 'החלטה',
                component: DocumentStepComponent
            }, 
            {
                id: 'payments',
                label: 'תשלומים',
                component: DocumentStepComponent
            }, 
            {
                id: PROCESS_KNOWN.APPROVAL_STEP, 
                label: 'גורם מאשר',
                component: DocumentStepComponent
            }

        ], 
        infos: [
            {
                id: 'document', 
                label: 'מסמכים',
                component: DocumentInfoComponent
            }, 
            {
                id: 'enquiries', 
                label: 'שאילתות',
                component: EnquiriesInfoComponent
            }
        ], 
        verifyInsured: false,
        regularToolbar: (defaults) => ({
            ...defaults,
            processConsultation: undefined,
            splitProcess: async () => console.log('Split process action triggered'),
        })
    };
}