import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from "@angular/core";
import { BootstrapService } from "../shared/services/bootstrap.service";
import { Registry, REGISTRY_TOKEN } from "@ims";

export function provideInfra(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideAppInitializer(async () => {
            const bootstrapper = inject(BootstrapService);
            await bootstrapper.start();
        })
    ]);
}

export function provideRegistry(registry: Registry): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: REGISTRY_TOKEN,
            useValue: registry
        }
    ]);
}