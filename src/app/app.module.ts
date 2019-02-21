import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoysDirective } from './boys/boys.directive';
import { MenComponent } from './men/men.component';
import { LegendsComponent } from './legends/legends.component';

@NgModule({
  declarations: [
    AppComponent,
    BoysDirective,
    MenComponent,
    LegendsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
