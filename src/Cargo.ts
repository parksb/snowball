class Cargo {
  static getValueFromLocalStorage(key: string): string {
    const foundKey = localStorage.getItem(key);

    if (!foundKey) {
      throw new Error('Failed to load key');
    }

    return foundKey;
  }

  static setPrivateKeyToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}

export default Cargo;
