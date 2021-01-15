import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'aacomponente5',
    templateUrl: './aacomponente5.component.html',
    styleUrls: ['./aacomponente5.component.scss']
})
export class AAComponente5Component implements OnInit {
    constructor(
        private _formBuilder: FormBuilder
    ) {
        this.registrationFormGroup = this._formBuilder.group({
            nome: ["", [Validators.required]],
            cognome: ["", [Validators.required]],
            giornoDiNascita: ["", [Validators.required]],
            meseDiNascita: ["", [Validators.required]],
            annoDiNascita: ["", [Validators.required]],
            email: ["", [Validators.required, Validators.email]],
            ripetiEmail: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]],
            ripetiPassword: ["", [Validators.required]]
        })
    }

    registrationFormGroup: FormGroup;

    ngOnInit(): void { }

    giorni = [
        { value: "0", viewValue: "1" },
        { value: "1", viewValue: "2" },
        { value: "2", viewValue: "3" },
        { value: "3", viewValue: "4" },
        { value: "4", viewValue: "5" },
        { value: "5", viewValue: "6" },
        { value: "6", viewValue: "7" },
        { value: "7", viewValue: "8" },
        { value: "8", viewValue: "9" },
        { value: "9", viewValue: "10" },
        { value: "10", viewValue: "11" },
        { value: "11", viewValue: "12" },
        { value: "12", viewValue: "13" },
        { value: "13", viewValue: "14" },
        { value: "14", viewValue: "15" },
        { value: "15", viewValue: "16" },
        { value: "16", viewValue: "17" },
        { value: "17", viewValue: "18" },
        { value: "18", viewValue: "19" },
        { value: "19", viewValue: "20" },
        { value: "20", viewValue: "21" },
        { value: "21", viewValue: "22" },
        { value: "22", viewValue: "23" },
        { value: "23", viewValue: "24" },
        { value: "24", viewValue: "25" },
        { value: "25", viewValue: "26" },
        { value: "26", viewValue: "27" },
        { value: "27", viewValue: "28" },
        { value: "28", viewValue: "29" },
        { value: "29", viewValue: "30" },
        { value: "30", viewValue: "31" }
    ];

    mesi = [
        { value: "0", viewValue: "Gennaio" },
        { value: "1", viewValue: "Febbraio" },
        { value: "2", viewValue: "Marzo" },
        { value: "3", viewValue: "Aprile" },
        { value: "4", viewValue: "Maggio" },
        { value: "5", viewValue: "Giugno" },
        { value: "6", viewValue: "Luglio" },
        { value: "7", viewValue: "Agosto" },
        { value: "8", viewValue: "Settembre" },
        { value: "9", viewValue: "Ottobre" },
        { value: "10", viewValue: "Novembre" },
        { value: "11", viewValue: "Dicembre" }
    ];

    anni = [
        { value: "0", viewValue: "1990" },
        { value: "1", viewValue: "1991" },
        { value: "2", viewValue: "1992" },
        { value: "3", viewValue: "1993" },
        { value: "4", viewValue: "1994" },
        { value: "5", viewValue: "1995" },
        { value: "6", viewValue: "1996" },
        { value: "7", viewValue: "1997" },
        { value: "8", viewValue: "1998" },
        { value: "9", viewValue: "1999" },
        { value: "10", viewValue: "2000" },
        { value: "11", viewValue: "2001" },
        { value: "12", viewValue: "2002" },
        { value: "13", viewValue: "2003" },
        { value: "14", viewValue: "2004" },
        { value: "15", viewValue: "2005" },
        { value: "16", viewValue: "2006" },
        { value: "17", viewValue: "2007" },
        { value: "18", viewValue: "2008" },
        { value: "19", viewValue: "2009" },
        { value: "20", viewValue: "2010" },
        { value: "21", viewValue: "2011" },
        { value: "22", viewValue: "2012" }
    ]

}
