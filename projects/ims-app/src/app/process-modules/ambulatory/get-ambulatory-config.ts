import { ProcessConfig } from "@ims";
import { DocumentStepComponent } from "./steps/document-step/document-step.component";
import { InsuredRequestStepComponent } from "./steps/insured-request-step/insured-request-step.component";

export function getAmbulatoryConfig(): ProcessConfig {
    return {
        processType: "AMBULATORY_HEALTH_CLAIM",
        steps: [
            {
                id: 'document', 
                label: 'מסמכים',
                component: DocumentStepComponent
            }, 
            {
                id: 'insured-request', 
                label: 'בקשות מבוטח', 
                component: InsuredRequestStepComponent
            }
        ]
    };
}