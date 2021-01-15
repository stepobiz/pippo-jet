import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RsComponent4 } from './components/rscomponent4/rscomponent4.component';
import { RsComponent5 } from './components/rscomponent5/rscomponent5.component';
import { RsComponent3 } from './components/rscomponent3/rscomponent3.component';
import { RsComponent2 } from './components/rscomponent2/rscomponent2.component';
import { RsComponent1 } from './components/rscomponent1/rscomponent1.component';
import { RsComponentePadre } from './components/rscomponent6/rscomponent6.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
    declarations: [
        RsComponent1,
        RsComponent2,
        RsComponent3,
        RsComponent4,
        RsComponent5,
        RsComponentePadre,
    ],
    imports: [ 
        BrowserModule,
        NoopAnimationsModule,
        NgImageSliderModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        MatCheckboxModule,
        MatDatepickerModule,

    ],
    exports: [
        RsComponentePadre,

    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'it-IT'}],
    schemas: [
        NO_ERRORS_SCHEMA
      ]
  
})
export class pjRossellaModule {}