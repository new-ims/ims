import { ProcessConfig } from "@ims";

export function getAmbulatoryConfig(): ProcessConfig {
    return {
        processType: "AMBULATORY_HEALTH_CLAIM",
        steps: [
            "INITIAL",
            "REVIEW",
            "APPROVAL",
            "PAYMENT",
            "CLOSURE"
        ]
    };
}