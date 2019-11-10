import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUserService {
  constructor() {
  }
  setSession(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getSession(key: string): any {
    if (typeof window !== 'undefined') {
      const retrievedObject = localStorage.getItem(key) as string;
      return retrievedObject;
    }
  }

  removeId(key: string): void {
    localStorage.removeItem(key);
  }

  clearSession(): void {
    localStorage.clear();
  }
}
