import {Component} from '@angular/core';
import {CounterState} from './stores/counter/counter.store';
import {Observable} from 'rxjs/observable';
import {Store} from '@ngrx/store';
import {DECREMENT, INCREMENT, RESET} from './stores/counter/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch({
      type: INCREMENT,
      payload: {
        value: 1
      }
    });
  }

  decrement() {
    this.store.dispatch({
      type: DECREMENT,
      payload: {
        value: 1
      }
    });
  }

  reset() {
    this.store.dispatch({type: RESET});
  }
}
