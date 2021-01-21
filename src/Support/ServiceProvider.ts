import {ApplicationContainer} from "./Application";

export interface ServiceProviderInterface<T> {
    app: T
    register? (): void
    boot? (): void
}

export interface ServiceProviderConstructor {
    new <T extends ApplicationContainer>(app?: T): ServiceProvider<T>;
}

export abstract class ServiceProvider<T extends ApplicationContainer> implements ServiceProviderInterface<T> {

    name?: string|Function

    require?: Array<string>

    constructor(
        public app: T
    ) {}
}