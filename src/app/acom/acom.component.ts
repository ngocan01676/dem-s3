import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { action } from 'mobx';
import { Doubler } from '../doubler';
import { Item, Store } from '../store';

@Component({
  selector: 'app-acom',
  templateUrl: './acom.component.html',
  styleUrls: ['./acom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AComComponent implements OnInit {
  value = '';
  lastId = 0;
  constructor(public store: Store, public doubler: Doubler) {
    const item = new Item({
      id: -1,
      name: new Date().getTime().toString(),
      value: 5,
    });
    this.store.addItem(item);
    //this.store.doSomething(1500);
    // setTimeout(() => {
    //   this.store.doSomething(1500);
    // }, 0);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.store.doSomething(1);
      console.log('this.store.value', this.store.values);
    }, 2000);
    // this.store
    //   .toRx(this.store.counterWrapper, 'counter')
    //   .subscribe((val: any) => console.log('val val val', val));
  }
  add() {
    console.log('ACom');
    this.store.doSomething(1);
  }
  increment() {
    console.log(true);
    action((states: any) => {
      console.log(states);
    });
  }

  getTotal() {
    alert(this.store.total);
  }

  addItem() {
    const item = new Item({
      id: this.lastId,
      name: new Date().getTime().toString(),
      value: parseInt(this.value),
    });
    this.store.addItem(item);
    this.value = '';
    this.lastId++;
  }
}
