import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';


import { PjNcComponent7 } from './components/component-7/component7.component';
import { PjNcComponent8 } from './components/component-8/component8.component';
import { PjNcComponent1 } from './components/component-1/component1.component';
import { PjNcComponent2 } from './components/component-2/component2.component';
import { PjNcComponent3 } from './components/component-3/component3.component';
import { PjNcComponent4 } from './components/component-4/component4.component';
import { PjNcComponent5 } from './components/component-5/component5.component';
import { PjNcComponent6 } from './components/component-6/component6.component';


@NgModule({
    declarations: [ 
        
        PjNcComponent1,
        PjNcComponent2,
        PjNcComponent3,
        PjNcComponent4,
        PjNcComponent5,
        PjNcComponent6,
        PjNcComponent7,
        PjNcComponent8,
    
    ],
    imports: [ CommonModule,
        
        BrowserModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule, 
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
    
    ],

    exports: [ PjNcComponent6,
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'it-IT' }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class pjNaomiModule {}

