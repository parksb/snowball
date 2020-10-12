"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    static get(key) {
        return localStorage.getItem(key);
    }
    static set(key, value) {
        localStorage.setItem(key, value);
    }
}
exports.default = Storage;
