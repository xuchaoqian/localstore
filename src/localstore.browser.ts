import { get, set, del } from "idb-keyval";
import { ILocalstore } from "./ilocalstore";

export class LocalStoreageImpl implements ILocalstore {
  get(key: string): Promise<string | undefined> {
    return Promise.resolve(localStorage.getItem(key) ?? undefined);
  }
  set(key: string, value: string): Promise<void> {
    return Promise.resolve(localStorage.setItem(key, value));
  }
  remove(key: string): Promise<void> {
    return Promise.resolve(localStorage.removeItem(key));
  }
}

export class IDBKeyValueImpl implements ILocalstore {
  get(key: string): Promise<string | undefined> {
    return get(key);
  }
  set(key: string, value: string): Promise<void> {
    return set(key, value);
  }
  remove(key: string): Promise<void> {
    return del(key);
  }
}

export function getImplInBrowser(): unknown {
  return typeof localStorage !== "undefined"
    ? LocalStoreageImpl
    : IDBKeyValueImpl;
}

export const LocalStore: ReturnType<typeof getImplInBrowser> =
  getImplInBrowser();
