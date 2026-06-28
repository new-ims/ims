import { inject, Service } from "@angular/core";
import { ApiService } from "./api.service";

@Service()
export class BootstrapService {
    readonly #api = inject(ApiService);
    #delay(millis: number) {
        return new Promise(resolve => setTimeout(resolve, millis));
    }

    async start() {
        console.log('BootstrapService started');
        // read sessionManagerId query param from url
        const url = new URL(window.location.href);
        const sessionManagerId = url.searchParams.get('sessionManagerId');
        if (!sessionManagerId) {
            console.error('sessionManagerId query param is missing');
            return;
        }

        const input = { sessionManagerId };
        const output = await this.#api.externalLogin(input);

        console.log('External login output:', output);
        console.log('BootstrapService finished');
    }
}