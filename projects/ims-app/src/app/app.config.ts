import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideInfra } from '@ims';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideInfra()
  ],
};
