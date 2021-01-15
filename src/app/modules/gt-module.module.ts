import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { componente1ggComponent } from './gt-module/componente1/componente1gg.component';
import { componente2ggComponent } from './gt-module/componente2/componente2gg.component';
import { componente3ggComponent } from './gt-module/componente3/componente3gg.component';
import { componente4ggComponent } from './gt-module/componente4/componente4gg.component';
import { componente5ggComponent } from './gt-module/componente5/componente5gg.component';
import { componente6ggComponent } from './gt-module/componente6/componente6gg.component';

@NgModule({
    declarations: [
        componente1ggComponent,
        componente2ggComponent,
        componente3ggComponent,
        componente4ggComponent,
        componente5ggComponent,
        componente6ggComponent,
        
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
        componente6ggComponent,
    ],
    providers: [],
})
export class gtModule {}