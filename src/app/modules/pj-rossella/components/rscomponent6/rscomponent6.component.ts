import { Component, OnInit, SchemaMetadata } from '@angular/core';

@Component({
    selector: 'rscomponentepadre',
    templateUrl: 'rscomponent6.component.html',
    styleUrls: ['rscomponent6.component.scss']
})
export class RsComponentePadre implements OnInit {
    constructor() { }

    ngOnInit(): void {
    
     }
    
    show1 = false;
    show2 = false;
    show3 = false; 
    show4 = false;
    show5 = false;

    nascondiTutto() {
        this.show1=false;
        this.show2=false;
        this.show3=false;
        this.show4=false;
        this.show5=false;
    }
    
    fShow(numeroBottone: number) {
        this.nascondiTutto();
        switch (numeroBottone) {
            case 1: this.show1=true; break;
            case 2: this.show2=true; break;
            case 3: this.show3=true; break;
            case 4: this.show4=true; break;
            case 5: this.show5=true; break;
        }

 
   }
}
