import { inject, Service } from '@angular/core';
import { ApiService } from './api.service';
import { REGISTRY_TOKEN } from './process-config';
import { ConfigStore } from '../stores/config/config.store';

@Service()
export class BootstrapService {
  readonly #api = inject(ApiService);
  readonly #registry = inject(REGISTRY_TOKEN);
  readonly #configStore = inject(ConfigStore);

  #delay(millis: number) {
    return new Promise((resolve) => setTimeout(resolve, millis));
  }

  async start() {
    this.getConfigInformation();
  }

  async getConfigInformation() {
    console.log('BootstrapService started');
    // read sessionManagerId query param from url
    const url = new URL(window.location.href);
    const sessionManagerId = url.searchParams.get('sessionManagerId');
    if (!sessionManagerId) {
      console.error('sessionManagerId query param is missing');
      return;
    }

    const input = { sessionManagerId };
    await this.#delay(2000); // wait for 1 second to simulate some delay
    const output = await this.#api.externalLogin(input);
    console.log('External login output:', output);
    await this.#delay(2000); // wait for 1 second to simulate some delay

    const processType = output.processType;
    const configurer = await this.#registry(processType);
    const config = configurer();
    console.log('config: ', config);

    const steps = config.steps;
    const infos = config.infos;
    const verifyInsured = config.verifyInsured;

    this.#configStore.setConfig(config, output.isHistorical);
    console.log('BootstrapService finished');
  }
}
