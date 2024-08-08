import { ILocalstore } from "./ilocalstore";
export declare class Localstore implements ILocalstore {
    constructor();
    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
