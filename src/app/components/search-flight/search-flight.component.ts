import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search-flight',
    templateUrl: './search-flight.component.html',
    styleUrls: ['./search-flight.component.scss']
})
export class pjSearchFlightComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    aereoporti = [
        {value: 'napoli-0', viewValue: 'Napoli'},
        {value: 'roma-1', viewValue: 'Roma'},
        {value: 'torino-2', viewValue: 'Torino'}
      ];

}