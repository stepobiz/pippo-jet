import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'show-flight',
    templateUrl: './show-flight.component.html',
    styleUrls: ['./show-flight.component.scss']
})
export class PjShowFlightComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    flight = [
        {numerovolo: 'CC54685', partenza: 'Napoli', destinazione: 'Roma'},
        {numerovolo: 'CD54865', partenza: 'Roma', destinazione: 'Roma'},
        {numerovolo: 'CD54865', partenza: 'Roma', destinazione: 'Roma'},
        {numerovolo: 'DS45856', partenza: 'Milano', destinazione: 'Roma'},
        {numerovolo: 'RF56895', partenza: 'Roma', destinazione: 'Casoria'},
        {numerovolo: 'CB58964', partenza: 'Torino', destinazione: 'Milano'},
        {numerovolo: 'GH55689', partenza: 'Genova', destinazione: 'Roma'},
        {numerovolo: 'JU54866', partenza: 'Capri', destinazione: 'Roma'}
      ];
}

