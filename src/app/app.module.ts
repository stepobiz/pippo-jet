import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { PjHomePageComponent } from './components/home-page/home-page.component';
import { PjToolbarComponent } from './components/toolbar/toolbar.component';
import { PjSliderComponent } from './components/slider/slider.component';
import { PjSearchFlightComponent } from './components/search-flight/search-flight.component';
import { PjFlightPageComponent } from './components/flight-page/flight-page.component';
import { PjAboutComponent } from './components/about/about.component';
import { PjHeaderComponent } from './components/header/header.component';
import { PjFooterComponent } from './components/pgfooter/footer.component';
import { PjShowFlightComponent } from './components/show-flight/show-flight.component';
import { PjTopMenuComponent } from './components/topmenu/topmenu.component';
import { PjLoginComponent } from './components/login/login.component';
import { PjAlbertoModule } from './modules/pj-alberto/pj-alberto.module';
import { pjNaomiModule } from './modules/pj-naomi/pj-naomi-module';
import { PjGiacomoModule } from './modules/gt-module/pj-giacomo.module';
import { PjRossellaModule } from './modules/pj-rossella/pj-rossella-module';
import { PjMarikaModule } from './modules/pj-marika/components/pj-marika.module';

@NgModule({
  declarations: [
    AppComponent,

    PjHomePageComponent,
    PjToolbarComponent,
    PjSliderComponent,
    PjSearchFlightComponent,
    PjFlightPageComponent,
    PjAboutComponent,
    PjHeaderComponent,
    PjFooterComponent,
    PjShowFlightComponent,
    PjTopMenuComponent,
    PjLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatSliderModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule, 
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,

    NgImageSliderModule,

    PjAlbertoModule,
    PjGiacomoModule,
    PjRossellaModule,
    pjNaomiModule,
    PjMarikaModule,
    
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'it-IT' }],
  bootstrap: [AppComponent]
})


export class AppModule { }


