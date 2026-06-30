import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialConfigSlice } from './config.slice';
import { ProcessConfig } from '@ims';
import { computed } from '@angular/core';

export const ConfigStore = signalStore(
  { providedIn: 'root' },
  withState(initialConfigSlice),
  withComputed((store) => ({
    isInitialized: computed(() => store.config() !== null),
  })),
  withMethods((store) => ({
    setConfig(config: ProcessConfig) {
      patchState(store, { config });
    },
  })),
);
