import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfferPipe } from './offer.pipe';
import { StyleDirective } from './style.directive';

// app.module.ts start
@NgModule({
  declarations: [AppComponent, OfferPipe, StyleDirective], // all compo
  imports: [BrowserModule], // all logic to run compo
  bootstrap: [AppComponent], // root component [ first UI ]
})
export class AppModule {}
// app.module.ts end
