import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AAComponente0Component } from './components/aacomponente0/aacomponente0.component';
import { AAComponente1Component } from './components/aacomponente1/aacomponente1.component';
import { AAComponente2Component } from './components/aacomponente2/aacomponente2.component';
import { AAComponente3Component } from './components/aacomponente3/aacomponente3.component';
import { AAComponente4Component } from './components/aacomponente4/aacomponente4.component';
import { AAComponente5Component } from './components/aacomponente5/aacomponente5.component';

import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        AAComponente0Component,
        AAComponente1Component,
        AAComponente2Component,
        AAComponente3Component,
        AAComponente4Component,
        AAComponente5Component
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
        MatCardModule

    ],
    exports: [
        AAComponente0Component
    ],
    providers: [],
})
export class PjAlbertoModule { }