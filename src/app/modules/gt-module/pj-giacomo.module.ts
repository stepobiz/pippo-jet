import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PjGtComponent1Component } from './components/component1/component-1.component';
import { PjGtComponent2Component } from './components/component2/component-2.component';
import { PjGtComponent3Component } from './components/component3/component-3.component';
import { PjGtComponent4Component } from './components/component4/component-4.component';
import { PjGtcomponent5Component } from './components/component5/component-5.component';
import { PjGtComponent6Component } from './components/component6/component-6.component';
import { PjGtComponent7Component } from './components/component7/component-7.component';
import { PjGtComponent8Component } from './components/component8/component-8.component';
import { PjGtComponent9Component } from './components/component9/component-9.component';
import { PjGtComponent10Component } from './components/component10/component-10.component';





@NgModule({
    declarations: [
         
        PjGtComponent1Component,
        PjGtComponent2Component,
        PjGtComponent3Component,
        PjGtComponent4Component,
        PjGtcomponent5Component,
        PjGtComponent6Component,
        PjGtComponent7Component,
        PjGtComponent8Component,
        PjGtComponent9Component,
        PjGtComponent10Component,



        
        
    ],
    imports: [ 
        CommonModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
    exports: [
        PjGtComponent6Component,

    ],
    providers: [],
})
export class PjGiacomoModule {}