import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { gameControl } from './GameControl/gameControl.component';
import { odd } from './Odd/odd.component';
import { even } from './Even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    gameControl,
    odd,
    even
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
