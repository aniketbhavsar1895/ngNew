import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// app.module.ts start
@NgModule({
  declarations: [AppComponent], // all compo
  imports: [BrowserModule], // all logic to run compo
  bootstrap: [AppComponent], // root component [ first UI ]
})
export class AppModule {}
// app.module.ts end
