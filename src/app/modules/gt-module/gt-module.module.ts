import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { componente1ggComponent } from './componente1/componente1gg.component';
import { componente2ggComponent } from './componente2/componente2gg.component';
import { componente3ggComponent } from './componente3/componente3gg.component';
import { componente4ggComponent } from './componente4/componente4gg.component';
import { componente5ggComponent } from './componente5/componente5gg.component';
import { componente6ggComponent } from './componente6/componente6gg.component';
import { Componente7ggComponent } from './componente7/componente7gg.component';
import { Componente8ggComponent } from './componente8/componente8gg.component';
import { Componente9ggComponent } from './componente9/componente9gg.component';
import { Componente10ggComponent } from './componente10/componente10gg.component';


@NgModule({
    declarations: [
        componente1ggComponent,
        componente2ggComponent,
        componente3ggComponent,
        componente4ggComponent,
        componente5ggComponent,
        componente6ggComponent,
        Componente7ggComponent,
        Componente8ggComponent,
        Componente9ggComponent,
        Componente10ggComponent,
        

        
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