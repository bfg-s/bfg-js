import { anyObject } from "./Request";
export declare class Caller {
    [key: string]: any;
    call(command: string | anyObject, ...value: Array<any>): void;
}
