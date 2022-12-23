import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  saveToLocalStorage(name: string, val: any) {
    localStorage.setItem(name, val);
  }

  readFromLocalStorage(name: string) {
    return localStorage.getItem(name);
  }

  removeFromLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
