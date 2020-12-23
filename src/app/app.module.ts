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
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { PjHomePageComponent } from './components/home-page/home-page.component';
import { PjFlightPageComponent } from './components/flight-page/flight-page.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,

    PjHomePageComponent,
    PjFlightPageComponent,

    pjSearchFlightComponent,
    PjToolbarComponent,
    PjAboutComponent,
    PjHeaderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,

    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
