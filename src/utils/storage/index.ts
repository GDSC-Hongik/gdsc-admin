export * from "./keys";

type StorageType = {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
  clearAll(): void;
};

export class LocalStorage implements StorageType {
  private serialize = <T>(value: T): string | null => {
    try {
      return JSON.stringify(value);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  private deserialize = (value: string): string | null => {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  get(key: string): string | null {
    try {
      return this.deserialize(localStorage.getItem(key) || "");
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  set(key: string, value: string): void {
    try {
      localStorage.setItem(key, this.serialize(value) as string);
    } catch (error) {
      console.error(error);
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }

  clearAll(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }
}

const lStorage = new LocalStorage();

export default lStorage;
