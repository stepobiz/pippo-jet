import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nccomponente-6-padre',
    templateUrl: './nccomponente-6.component.html',
    styleUrls: ['./nccomponente-6.component.scss']
})
export class NcComponente6 implements OnInit {
   
    constructor() { }


    ngOnInit(): void { }

    mostraComponente1: boolean = false;
    mostraComponente2: boolean = false;
    mostraComponente3: boolean = false;
    mostraComponente4: boolean = false;
    mostraComponente5: boolean = false;


    hideComponents() {
        this.mostraComponente1 = false;
        this.mostraComponente2 = false;
        this.mostraComponente3 = false;
        this.mostraComponente4 = false;
        this.mostraComponente5 = false;

    }

    showComponent (componentNumber: number) { 
        this.hideComponents ();
        switch (componentNumber) {
            case 1: this.mostraComponente1 = true; break;
            case 2: this.mostraComponente2 = true; break;
            case 3: this.mostraComponente3 = true; break;
            case 4: this.mostraComponente3 = true; break;
            case 5: this.mostraComponente3 = true; break;
                
        }
      
    

} 

}