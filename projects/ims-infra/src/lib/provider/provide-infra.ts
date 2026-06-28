import { provideHttpClient } from "@angular/common/http";
import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";

export function provideInfra(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideHttpClient()
    ]);

}