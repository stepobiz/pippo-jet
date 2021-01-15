import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'nccomponente-5',
    templateUrl: './ncregistrazione.component.html',
    styleUrls: ['./ncregistrazione.component.scss',]
})
export class NcComponente5 implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
    ) {
        this.registrazioneFormGroup = this._formBuilder.group({
            
            nome:['',[Validators.required]],
            cognome:['',[Validators.required]],
            email:['',[Validators.required, Validators.email]],
            nazione:['',[Validators.required]]

        }); 
      }

        emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,

    ])
    


    registrazioneFormGroup: FormGroup; 

    nation = [ 

        {value: 'Italia', viewValue: 'Italia'},
        {value: 'Spagna', viewValue: 'Spegna'},
        {value: 'Cina', viewValue: 'Cina'},
        {value: 'Africa', viewValue: 'Africa'},
        {value: 'Stati Uniti', viewValue: 'Stati Uniti'},
        {value: 'Belgio', viewValue: 'Belgio'},

    ]
    
    

    ngOnInit(): void {}

}



