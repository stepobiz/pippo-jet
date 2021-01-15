import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search-flight',
    templateUrl: './search-flight.component.html',
    styleUrls: ['./search-flight.component.scss']
})
export class PjSearchFlightComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    checkvalue = false;

    aereoporti = [
        {value: 'bergamo-0', viewValue: 'Bergamo - Orio al Serio'},
        {value: 'bologna-1', viewValue: 'Bologna - Guglielmo Marconi'},
        {value: 'catania-2', viewValue: 'Catania - Fontana Rossa'},
        {value: 'milano-3', viewValue: 'Milano - Linate'},
        {value: 'milano-4', viewValue: 'Milano - Malpensa'},
        {value: 'napoli-5', viewValue: 'Napoli - Capodichino'},
        {value: 'palermo-6', viewValue: 'Palermo - Falcone e Borsellino'},
        {value: 'pisa-7', viewValue: 'Pisa - Galileo Galilei'},
        {value: 'roma-8', viewValue: 'Roma - Fiumicino'},
        {value: 'venezia-9', viewValue: 'Venezia - Marco Polo'},
      ];

}