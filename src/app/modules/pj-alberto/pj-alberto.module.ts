import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { PjAaComponent0Component } from './components/aacomponente0/component-0.component';
import { PjAaComponent1Component } from './components/aacomponente1/component-1.component';
import { PjAaComponent2Component } from './components/aacomponente2/component-2.component';
import { PjAaComponent3Component } from './components/aacomponente3/component-3.component';
import { PjAaComponent4Component } from './components/aacomponente4/component-4.component';
import { PjAaComponent5Component } from './components/aacomponente5/component-5.component';


@NgModule({
    declarations: [
        PjAaComponent0Component,
        PjAaComponent1Component,
        PjAaComponent2Component,
        PjAaComponent3Component,
        PjAaComponent4Component,
        PjAaComponent5Component,
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatCardModule,

    ],
    exports: [
        PjAaComponent0Component,
    ],
    providers: [],
})
export class PjAlbertoModule { }