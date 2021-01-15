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
import { NcComponente1 } from './nc-components/nccomponente-1/ncomponente1.component';
import { NcComponente2 } from './nc-components/nccomponente-2/nccomponente-2.component';
import { NcComponente3 } from './nc-components/nccomponente-3/componente3.component';
import { NcComponente5 } from './nc-components/nccomponents/ncomponente1/nccomponente-5/ncregistrazione.component';
import { NcComponente6 } from './nc-components/nccomponente-6/nccomponente-6.component';
import { NcLogin } from './nc-components/nccomponent-4/login.component';





@NgModule({
    declarations: [ NcComponente1,
        NcComponente2,
        NcComponente3,
        NcComponente5,
        NcComponente6,
        NcLogin, 
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

    exports: [ NcComponente6,
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'it-IT' }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class pjNaomiModule {}

