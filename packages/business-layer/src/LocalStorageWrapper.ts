export interface Storage {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): boolean;
}

export class LocalStorageSingleton implements Storage {
  private static __instance: LocalStorageSingleton;
  constructor() {
    if (LocalStorageSingleton.__instance) {
      return LocalStorageSingleton.__instance;
    } else {
      LocalStorageSingleton.__instance = this;
    }
  }
  get<T>(key: string): T | null {
    try {
      return JSON.parse(localStorage.getItem(key)) as T;
    } catch (e) {
      return null;
    }
  }

  set<T>(key: string, value: T): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      return false;
    }
  }
}
