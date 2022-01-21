import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { CouterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-counter-input',
  templateUrl: './counter-counter-input.component.html',
  styleUrls: ['./counter-counter-input.component.css'],
})
export class CounterCounterInputComponent implements OnInit {
  value!: number;
  constructor(private store: Store<{ counter: CouterState }>) {}

  AddInput() {
    console.log(this.value);
    this.store.dispatch(customIncrement({ count: this.value }));
  }

  ngOnInit(): void {}
}
