import { Injectable } from '@angular/core';

@Injectable()
export class StorageService{
  localStorage = localStorage;
  setItem<T>(key: string, item: T): T{
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string): T{
    let item;
    const temp = localStorage.getItem(key);

    try {
      item = JSON.parse(temp);
    } catch {
      item = temp;
    }

    return item;
  }
}
