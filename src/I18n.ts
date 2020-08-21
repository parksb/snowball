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

  text(key: string): string {
    return this.texts[key][I18n.getUserLanguage()] as string;
  }
}

export default I18n;
