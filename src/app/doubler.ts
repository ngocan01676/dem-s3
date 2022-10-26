import { Injectable } from '@angular/core';
import { makeObservable, observable, action } from 'mobx';

@Injectable({
  providedIn: 'root',
})
export class Doubler {
  value = 0;

  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action,
    });
  }

  increment() {
    // Intermediate states will not become visible to observers.
    this.value++;
    this.value++;
  }
}
