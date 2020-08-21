"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var I18nLanguages;
(function (I18nLanguages) {
    I18nLanguages["KO"] = "ko";
    I18nLanguages["EN"] = "en";
})(I18nLanguages || (I18nLanguages = {}));
class I18n {
    constructor(texts) {
        this.texts = texts;
    }
    static getUserLanguage() {
        const { language } = navigator;
        switch (language) {
            case 'ko-KR':
                return I18nLanguages.KO;
            case 'en-US':
                return I18nLanguages.EN;
            default:
                return I18nLanguages.EN;
        }
    }
    text(key) {
        return this.texts[key][I18n.getUserLanguage()];
    }
}
exports.default = I18n;
