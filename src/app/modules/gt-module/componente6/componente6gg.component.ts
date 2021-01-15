import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'componente6gg',
    templateUrl: './componente6gg.component.html',
    styleUrls: ['./componente6gg.component.scss']
})
export class componente6ggComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
    varPrimo = false;
    varSecondo = false;
    varTerzo = false;
    varQuarto = false;
    varQuinto = false;
   
    showComponent(ncomponent: number){
        this.varPrimo = false;
        this.varSecondo = false;
        this.varTerzo = false;
        this.varQuarto = false;
        this.varQuinto = false;

        switch(ncomponent){
            case 1: this.varPrimo = true; break;
            case 2: this.varSecondo = true; break;
            case 3: this.varTerzo = true; break;
            case 4: this.varQuarto = true; break;
            case 5: this.varQuinto = true; break;
        }
    }

    MostraPrimo(){
        if(this.varPrimo){
            this.varPrimo = false;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }else{
            this.varPrimo = true;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }
    }
    MostraSecondo(){
        if(this.varSecondo){
            this.varPrimo = false;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }else{
            this.varSecondo = true;
            this.varPrimo = false;
            this.varTerzo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }
    }
    MostraTerzo(){
        if(this.varTerzo){
            this.varPrimo = false;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }else{
            this.varTerzo = true;
            this.varPrimo = false;
            this.varSecondo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }
    }
    MostraQuarto(){
        if(this.varQuarto){
            this.varPrimo = false;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }else{
            this.varQuarto = true;
            this.varPrimo = false;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuinto = false;
        }
    }
    MostraQuinto(){
        if(this.varQuinto){
            this.varPrimo = false;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuarto = false;
            this.varQuinto = false;
        }else{
            this.varQuinto = true;
            this.varPrimo = false;
            this.varSecondo = false;
            this.varTerzo = false;
            this.varQuarto = false;
        }
    }
}
