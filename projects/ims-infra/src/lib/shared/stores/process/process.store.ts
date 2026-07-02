import { signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { initialProcessSlice, ProcessModifier } from './process.slice';
import { Model } from '@common';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { processToDetailsVm } from './process.vm';
import { modifyProcess, resetProcess } from './process.updaters';
import { ConfigStore } from '../config/config.store';
import { buildStepStates } from './process.helpers';

export const ProcessStore = signalStore(
  { providedIn: 'root' },
  withState(initialProcessSlice),
  withProps(_ => ({
    _config: inject(ConfigStore),
  })),
  withComputed((store) => ({
    details: computed(() => processToDetailsVm(store.process())),
    steps: computed(() => buildStepStates(store._config.stepTabs(), store.process()))
  })),
  withMethods((store) => ({
    resetProcess(process: Model.Process) {
      updateState(store, '[Process] setProcess', resetProcess(process));
    },
    modifyProcess(modifier: ProcessModifier) {
      updateState(store, '[Process] modifyProcess', modifyProcess(modifier));
    }
  })),
  withDevtools('ProcessStore'),
);
