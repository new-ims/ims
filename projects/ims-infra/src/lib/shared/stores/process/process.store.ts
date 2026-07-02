import { signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { initialProcessSlice, ProcessModifier } from './process.slice';
import { Model } from '@common';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { processToDetailsVm } from './process.vm';
import { modifyProcess, resetProcess, setSelectedTab } from './process.updaters';
import { ConfigStore } from '../config/config.store';
import { buildStepStates } from './process.helpers';

export const ProcessStore = signalStore(
  { providedIn: 'root' },
  withState(initialProcessSlice),
  withProps(_ => ({
    _config: inject(ConfigStore),
  })),
  withComputed((store) => {
    const details = computed(() => processToDetailsVm(store.process()));
    const steps = computed(() => buildStepStates(store._config.stepTabs(), store.process()));
    const selectedStep = computed(() => steps().find(s => s.state === 'selected') || null);
    return { details, steps, selectedStep };
  }),
  withMethods((store) => ({
    resetProcess(process: Model.Process) {
      updateState(store, '[Process] setProcess', resetProcess(process));
    },
    modifyProcess(modifier: ProcessModifier) {
      updateState(store, '[Process] modifyProcess', modifyProcess(modifier));
    }, 
    setSelectedTab(tabName: string) {
      const steps = store.steps();
      const step = steps.find(s => s.name === tabName);
      if (step && step.state === 'enabled') {
        updateState(store, '[Process] setSelectedTab', setSelectedTab(tabName));
      }
    }
  })),
  withDevtools('ProcessStore'),
);
