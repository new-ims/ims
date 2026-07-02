import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialProcessSlice, ProcessModifier } from './process.slice';
import { Model } from '@common';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { processToDetailsVm } from './process.vm';
import { modifyProcess, resetProcess } from './process.updaters';

export const ProcessStore = signalStore(
  { providedIn: 'root' },
  withState(initialProcessSlice),
  withComputed((store) => ({
    details: computed(() => processToDetailsVm(store.process())),
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
