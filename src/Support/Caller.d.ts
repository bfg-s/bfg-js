import { anyObject } from "./Request";
import { ApplicationContainer } from "./Application";
export declare class Caller {
    [key: string]: any;
    make(app: ApplicationContainer): (command: string | anyObject, ...value: Array<any>) => void;
}
