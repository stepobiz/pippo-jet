import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'show-flight',
    templateUrl: './show-flight.component.html',
    styleUrls: ['./show-flight.component.scss']
})
export class PjShowFlightComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    flights = [
        {numerovolo: 'CC54685', partenza: 'Napoli', destinazione: 'Torino', ritardo: '15 min', prezzo: '30€'},
        {numerovolo: 'CD54865', partenza: 'Roma', destinazione: 'Torino', ritardo: '10 min', prezzo: '20€'},
        {numerovolo: 'CD54865', partenza: 'Torino', destinazione: 'Roma', ritardo: ' ', prezzo: '12€'},
        {numerovolo: 'DS45856', partenza: 'Napoli', destinazione: 'Roma', ritardo: '12 min', prezzo: '15€'},
        {numerovolo: 'RF56895', partenza: 'Roma', destinazione: 'Napoli', ritardo: '7 min', prezzo: '10€'},
        {numerovolo: 'CB58964', partenza: 'Torino', destinazione: 'Napoli', ritardo: '8 min', prezzo: '10€'},
        {numerovolo: 'GH55689', partenza: 'Genova', destinazione: 'Roma', ritardo: '5 min', prezzo: '25€'},
        {numerovolo: 'JU54866', partenza: 'Genova', destinazione: 'Torino', ritardo: '2 min', prezzo: '20€'}
      ];
}

