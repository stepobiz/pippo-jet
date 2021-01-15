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
import { PjRsComponent4 } from './components/component4/component4.component';
import { PjRsComponent5 } from './components/component5/component5.component';
import { PjRsComponent3 } from './components/component3/component3.component';
import { PjRsComponent2 } from './components/component2/component2.component';
import { PjRsComponent1 } from './components/component1/component1.component';
import { PjRsComponentePadre } from './components/component6/component6.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PjRsComponent7 } from './components/component7/component7.componente';
import { PjRsComponent8 } from './components/component8/component8.component';
import { PjRsComponent10 } from './components/component10/component10.component';
import { PjRsComponent9 } from './components/component9/component9.component';


@NgModule({
    declarations: [
        PjRsComponent1,
        PjRsComponent2,
        PjRsComponent3,
        PjRsComponent4,
        PjRsComponent5,
        PjRsComponentePadre,
        PjRsComponent7,
        PjRsComponent8,
        PjRsComponent9,
        PjRsComponent10,
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
        PjRsComponentePadre,

    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'it-IT'}],
    schemas: [
        NO_ERRORS_SCHEMA
      ]
  
})
export class PjRossellaModule {}