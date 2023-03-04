export const sessionStorage = {
  set<T>(name: string, data: T) {
    window.sessionStorage.setItem(name, JSON.stringify(data));
  },
  get(name: string) {
    return JSON.parse(window.sessionStorage.getItem(name) as string);
  },
  getValue(name: string) {
    return window.sessionStorage.getItem(name);
  }
};
export const localStorage = {
  set<T>(name: string, data: T) {
    window.localStorage.setItem(name, JSON.stringify(data));
  },
  get(name: string) {
    return JSON.parse(window.localStorage.getItem(name) as string);
  },
  getValue(name: string) {
    return window.localStorage.getItem(name);
  }
};
