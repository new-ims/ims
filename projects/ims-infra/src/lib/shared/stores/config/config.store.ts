import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { initialConfigSlice } from "./config.slice";
import { ProcessConfig } from "@ims";

export const ConfigStore = signalStore(
    { providedIn: 'root' },
    withState(initialConfigSlice), 
    withMethods(store => ({
        setConfig(config: ProcessConfig) {
            patchState(store, { config });
        }
    }))
);

