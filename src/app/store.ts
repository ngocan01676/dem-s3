import { Injectable } from '@angular/core';
import {
  action,
  autorun,
  computed,
  makeAutoObservable,
  observable,
  observe,
  runInAction,
  values,
} from 'mobx';
import { Observable } from 'rxjs';

export class Item {
  id: string;
  name: string;
  value: number;
  constructor(options: any) {
    this.id = options.id;
    this.name = options.name;
    this.value = options.value;
  }
}

@Injectable({
  providedIn: 'root',
})
export class Store {
  @observable values = 10000;
  @observable counterWrapper = { counter: 0 };
  @observable items: Item[] = [];
  @observable message: string = '';
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      console.log(this.message);
    });
  }
  @action doSomething(value: number) {
    //this.value += value ?? 1;
    Promise.resolve().then(() => {
      this.values -= value ?? 1;
      // runInAction(() => {
      //   this.value += value ?? 1;
      // });
    });
  }
  @computed get filteredLists() {
    return this.values;
  }

  @action addItem(item: Item) {
    this.items.push(item);
    this.message = Math.floor(Math.random() * 1000).toString();
  }

  @computed get total() {
    console.log('total');
    return this.items.reduce((c, n) => c + n.value, 0);
  }

  toRx(obj: any, prop: any) {
    return Observable.create((observer: any) =>
      observe(obj, prop, (change) => observer.next(change.newValue), true)
    );
  }
}
