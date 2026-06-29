import { Model } from "@common";
import { Registry } from "@ims";

export const processRegistery: Registry = async (processType: Model.ProcessType) => {
    switch (processType) {
        case "AMBULATORY_HEALTH_CLAIM":
            const { getAmbulatoryConfig } = await import("./ambulatory/get-ambulatory-config");
            return getAmbulatoryConfig;
        default:
            throw new Error(`Process type ${processType} is not supported`);
    }
}