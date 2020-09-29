enum I18nLanguages {
  KO = 'ko',
  EN = 'en',
}

interface I18nText {
  [key: string]: {
    ko: string
    en: string
  };
}

class I18n {
  private readonly texts: I18nText;

  constructor(texts: I18nText) {
    this.texts = texts;
  }

  static getUserLanguage(): I18nLanguages {
    const language = navigator.language;

    if (language.startsWith(I18nLanguages.KO)) {
        return I18nLanguages.KO;
    } else if (language.startsWith(I18nLanguages.EN)) {
        return I18nLanguages.EN;
    } else {
        return I18nLanguages.EN;
    }
  }

  text(key: string): string {
    return this.texts[key][I18n.getUserLanguage()] as string;
  }
}

export { I18n, I18nLanguages, I18nText };
