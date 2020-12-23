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
import { PjHomePageComponent } from './components/home-page/home-page.component';
import { PjFlightPageComponent } from './components/flight-page/flight-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { PgFooterComponent } from './components/pgfooter/pgfooter.component';
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,

    PjHomePageComponent,
    PjFlightPageComponent,

    pjSearchFlightComponent,
    PjToolbarComponent,
    PjAboutComponent,
    PjHeaderComponent,
    PgFooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
