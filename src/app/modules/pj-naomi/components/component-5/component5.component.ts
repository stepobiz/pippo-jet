import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'component-5',
    templateUrl: './component5.component.html',
    styleUrls: ['./component5.component.scss',]
})
export class PjNcComponent5 implements OnInit {
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



