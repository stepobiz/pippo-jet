import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pj-topmenu',
    templateUrl: './topmenu.component.html',
    styleUrls: ['./topmenu.component.scss']
})
export class PjTopMenuComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    flightMenu = [
        { value: 'offerta-voli', viewValue: 'Offerta di volo' },
        { value: 'stato-volo', viewValue: 'Stato del tuo volo' },
        { value: 'gruppi', viewValue: 'Gruppi' },
        { value: 'agenzie-viaggi', viewValue: 'Agenzie di viaggi' }
    ];

    prenotation = [
        { value: 'check-in', viewValue: 'Check-in online' },
        { value: 'scegli-posto', viewValue: 'Scegli il tuo posto' },
        { value: 'priority', viewValue: 'Imbarco prioritario' },
        { value: 'baggage', viewValue: 'Aggiungi un bagaglio' },
        { value: 'gestisci-prenotazione', viewValue: 'Gestisci la tua prenotazione' },
        { value: 'prima-del-viaggio', viewValue: 'Prima del viaggio' },
        { value: 'condizioni', viewValue: 'Condizioni di trasporto del bagaglio' },
    ];

    discover = [
        { value: 'destination', viewValue: 'Mappa di destinazione e rotte' },
        { value: 'combo', viewValue: 'Combo' },
        { value: 'flex', viewValue: 'Flex' },
        { value: 'intrattenimento', viewValue: 'Intrattenimento a bordo' },
        { value: 'megapippojet', viewValue: 'Megapippojet' },
        { value: 'blog', viewValue: 'Pippojet travel Blog' },
        { value: 'vola-con-noi', viewValue: 'Volare con Pippojet' },

    ];

    pippojet = [
        { value: 'info', viewValue: 'Informazioni su Pippojet' },
        { value: 'sala-stampa', viewValue: 'Sala stampa' },
        { value: 'assistenza', viewValue: 'Centro assistenza' },
        { value: 'lavora', viewValue: 'Lavora con noi ' },
        { value: 'feedback', viewValue: 'La tua opinione è importante' },
        
    ];


}