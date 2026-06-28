import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Api } from "@common";
import { firstValueFrom } from "rxjs";


@Service()
export class ApiService {
    readonly #baseUrl = 'http://localhost:3001';
    readonly #http = inject(HttpClient);

    getProcess(input: Api.GetProcessInput): Promise<Api.GetProcessOutput> {
        const res = this.#http.post<Api.GetProcessOutput>(
            `${this.#baseUrl}/processServiceFacade/getProcess`, input);
        return firstValueFrom(res);
    }

    externalLogin(input: Api.ExternalLoginInput): Promise<Api.ExternalLoginOutput> {
        const res = this.#http.post<Api.ExternalLoginOutput>(
            `${this.#baseUrl}/externalLoginController/externalLogin`, input);
        return firstValueFrom(res);
    }
}