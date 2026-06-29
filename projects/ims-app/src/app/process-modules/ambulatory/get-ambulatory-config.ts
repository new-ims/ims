import { ProcessConfig } from "@ims";
import { DocumentStepComponent } from "./steps/document-step/document-step.component";
import { InsuredRequestStepComponent } from "./steps/insured-request-step/insured-request-step.component";
import { DocumentInfoComponent } from "./infos/document-info/document-info.component";
import { EnquiriesInfoComponent } from "./infos/enquiries-info/enquiries-info.component";

export function getAmbulatoryConfig(): ProcessConfig {
    return {
        processType: "AMBULATORY_HEALTH_CLAIM",
        steps: [
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
        regularToolbar: (defaults) => ({
            ...defaults,
            splitProcess: undefined,
        })
    };
}