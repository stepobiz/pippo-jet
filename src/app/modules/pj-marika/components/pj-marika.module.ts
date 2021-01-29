import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PjMkcomponent6Component } from './mkcomponent6/mkcomponent6.component';

import { PjMkcomponent1Component } from './component-1/component-1.component';
import { PjMkcomponent2Component } from './component-2/component-2.component';
import { PjMkcomponent3Component } from './component-3/component-3.component';
import { PjMkcomponent4Component } from './component-4/component-4.component';
import { PjMkcomponent5Component } from './component-5/component-5.component';







@NgModule({
  declarations: [
   
    PjMkcomponent1Component,
    PjMkcomponent2Component,
    PjMkcomponent3Component,
    PjMkcomponent4Component,
    PjMkcomponent5Component,

    PjMkcomponent6Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    PjMkcomponent6Component,
  ],
  
  providers: [],
  
})
export class PjMarikaModule {}