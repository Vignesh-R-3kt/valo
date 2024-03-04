import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoaderEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getStatus() {
    return this.isLoaderEnabled as Observable<boolean>;
  }

  show() {
    this.isLoaderEnabled.next(true);
  }

  close() {
    this.isLoaderEnabled.next(false);
  }
}
