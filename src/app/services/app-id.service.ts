import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class AppIdService {

  private APP_ID: string = 'appId';
  constructor() { }

  get appId(): string {
    if (localStorage.getItem(this.APP_ID)) {
      return localStorage.getItem(this.APP_ID);
    } else {
      return this.createAppId();
    }
  }

  private createAppId(): string {
    const id = uuid.v4();
    localStorage.setItem(this.APP_ID, id);
    return id;
  }
}
