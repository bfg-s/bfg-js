import App, {ApplicationContainer} from './Support/Application';
import {Kernel} from './Support/Kernel';

declare global {
    interface globalThis {
        app?: ApplicationContainer
    }
    interface Window {
        app?: ApplicationContainer
        bfg?: boolean
    }
}

if (!App.has('start') ) {

    App.register(Kernel);
}


if (typeof exports === 'object') {

    exports.app = App;
}

export interface ApplicationInterface extends ApplicationContainer {}

export {ServiceProvider} from './Support/ServiceProvider';

export {ApplicationContainer} from './Support/Application';

export default App;