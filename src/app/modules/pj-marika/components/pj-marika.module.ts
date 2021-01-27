import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PjMkcomponent1Component } from './mkcomponent1/mkcomponent1.component';
import { PjMkcomponent2Component } from './mkcomponent2/mkcomponent2.component';
import { PjMkcomponent3Component } from './mkcomponent3/mkcomponent3.component';
import { PjMkcomponent4Component } from './mkcomponent4/mkcomponent4.component';
import { PjMkcomponent5Component } from './mkcomponent5/mkcomponent5.component';
import { PjMkcomponent6Component } from './mkcomponent6/mkcomponent6.component';






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
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    PjMkcomponent6Component
  ],
  
  providers: [],
  
})
export class PjMarikaModule {}