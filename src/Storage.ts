class Storage {
  static get(key: string): string {
    const found = localStorage.getItem(key);

    if (!found) {
      throw new Error('Failed to load');
    }

    return found;
  }

  static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}

export default Storage;
