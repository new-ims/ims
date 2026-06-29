import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideInfra, provideRegistry } from '@ims';
import { processRegistery } from './process-modules/registery';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideInfra(), 
    provideRegistry(processRegistery)
  ],
};
