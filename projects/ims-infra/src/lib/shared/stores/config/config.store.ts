import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialConfigSlice } from './config.slice';
import { ProcessConfig } from '@ims';
import { computed } from '@angular/core';
import { configSliceFromProcessConfig } from './config.helpers';

export const ConfigStore = signalStore(
  { providedIn: 'root' },
  withState(initialConfigSlice),
  withComputed((store) => ({
    isInitialized: computed(() => store.stepTabs().length > 0 || store.infoTabs().length > 0 || store.toolbarButtons().length > 0),
  })),
  withMethods((store) => ({
    setConfig(config: ProcessConfig, isHistorical: boolean) {
      const slice = configSliceFromProcessConfig(config, isHistorical);
      patchState(store, slice);
    },
  })),
);
