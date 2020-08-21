"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cargo {
    static getValueFromLocalStorage(key) {
        const foundKey = localStorage.getItem(key);
        if (!foundKey) {
            throw new Error('Failed to load key');
        }
        return foundKey;
    }
    static setPrivateKeyToLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
}
exports.default = Cargo;
