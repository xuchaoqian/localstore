import { LocalStorage } from "node-localstorage";
import { ILocalstore } from "./ilocalstore";

const globalWithLocalStorage = globalThis as unknown as {
  localStorage: LocalStorage;
};

export class Localstore implements ILocalstore {
  constructor() {
    if (typeof globalWithLocalStorage.localStorage === "undefined") {
      globalWithLocalStorage.localStorage = new LocalStorage(
        "./data/localstore",
      );
    }
  }
  get(key: string): Promise<string | undefined> {
    const value = globalWithLocalStorage.localStorage.getItem(key);
    return Promise.resolve(value !== null ? value : undefined);
  }
  set(key: string, value: string): Promise<void> {
    return Promise.resolve(
      globalWithLocalStorage.localStorage.setItem(key, value),
    );
  }
  remove(key: string): Promise<void> {
    return Promise.resolve(globalWithLocalStorage.localStorage.removeItem(key));
  }
}
