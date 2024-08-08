"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localstore = void 0;
const node_localstorage_1 = require("node-localstorage");
const globalWithLocalStorage = globalThis;
class Localstore {
    constructor() {
        if (typeof globalWithLocalStorage.localStorage === "undefined") {
            globalWithLocalStorage.localStorage = new node_localstorage_1.LocalStorage("./data/localstore");
        }
    }
    get(key) {
        const value = globalWithLocalStorage.localStorage.getItem(key);
        return Promise.resolve(value !== null ? value : undefined);
    }
    set(key, value) {
        return Promise.resolve(globalWithLocalStorage.localStorage.setItem(key, value));
    }
    remove(key) {
        return Promise.resolve(globalWithLocalStorage.localStorage.removeItem(key));
    }
}
exports.Localstore = Localstore;
//# sourceMappingURL=localstore.node.js.map