import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './stores/counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(counterReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
