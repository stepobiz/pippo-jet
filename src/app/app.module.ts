import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pjSearchFlightComponent } from './components/search-flight/search-flight.component';
import { PjToolbarComponent } from './components/toolbar/toolbar.component';
import { PjAboutComponent } from './components/about/about.component';
import { PjHeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu';

import { PjHomePageComponent } from './components/home-page/home-page.component';
import { PjFlightPageComponent } from './components/flight-page/flight-page.component';
import { PjTopMenuComponent } from './components/topmenu/topmenu.component';

@NgModule({
  declarations: [
    AppComponent,

    PjHomePageComponent,
    PjFlightPageComponent,

    pjSearchFlightComponent,
    PjToolbarComponent,
    PjAboutComponent,
    PjHeaderComponent,
    PjTopMenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,

    MatButtonModule,
    MatMenuModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
