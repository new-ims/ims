import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialProcessSlice } from './process.slice';
import { Model } from '@common';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { processToDetailsVm } from './process.vm';

export const ProcessStore = signalStore(
  { providedIn: 'root' },
  withState(initialProcessSlice),
  withComputed(store => ({
    details: computed(() => processToDetailsVm(store.process())),
  })),
  withMethods((store) => ({
    setProcess(process: Model.Process) {
        updateState(store, '[Process] setProcess', { process });
    },
  })),
  withDevtools('ProcessStore')
);
