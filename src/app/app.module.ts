import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { NgImageSliderModule } from 'ng-image-slider';

import { pjSearchFlightComponent } from './components/search-flight/search-flight.component';
import { PjToolbarComponent } from './components/toolbar/toolbar.component';
import { PjAboutComponent } from './components/about/about.component';
import { PjHeaderComponent } from './components/header/header.component';
import { PjHomePageComponent } from './components/home-page/home-page.component';
import { PjFlightPageComponent } from './components/flight-page/flight-page.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { PjSliderComponent } from './components/slider/slider.component';
import { PjTopMenuComponent } from './components/topmenu/topmenu.component';
import { PgFooterComponent } from './components/pgfooter/pgfooter.component';


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
    PjSliderComponent,
    PjTopMenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    
    MatButtonModule,
    MatListModule, 
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatMenuModule,

    NgImageSliderModule,

    
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'it-IT' }],
  bootstrap: [AppComponent]
})


export class AppModule { }
