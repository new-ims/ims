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
                id: 1,
                name: 'details', 
                label: 'פרטי תביעה',
                component: DocumentStepComponent
            },
            {
                id: 2,
                name: 'document', 
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
                id: 3,
                name: 'insured-request', 
                label: 'בקשות מבוטח', 
                component: InsuredRequestStepComponent
            }, 
            {
                id: 4,
                name: 'policies', 
                label: 'פוליסות',
                component: DocumentStepComponent
            }, 
            {
                id: 5,
                name: 'decision', 
                label: 'החלטה',
                component: DocumentStepComponent
            }, 
            {
                id: 6,
                name: 'payments',
                label: 'תשלומים',
                component: DocumentStepComponent
            }, 
            {
                id: 7,
                name: PROCESS_KNOWN.APPROVAL_STEP, 
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