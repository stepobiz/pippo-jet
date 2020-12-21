import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pjSearchFlightComponent } from './components/search-flight/search-flight.component';
import { PjToolbarComponent } from './components/toolbar/toolbar.component';
import { PjAboutComponent } from './components/about/about.component';
import { PjHeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    pjSearchFlightComponent,
    PjToolbarComponent,
    PjAboutComponent,
    PjHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
