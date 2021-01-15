import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'componente1gg',
    templateUrl: './componente1gg.component.html',
    styleUrls: ['./componente1gg.component.scss']
})
export class  componente1ggComponent implements OnInit {
    registrationFormGroup: FormGroup;
    constructor(
        private _formBuilder: FormBuilder,
    ) {
        this.registrationFormGroup = this._formBuilder.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            nation: ['', [Validators.required]]
        });
    }



    nations = [
        { value: 'Australia', viewValue: 'Australia' },
        { value: 'Belgium', viewValue: 'Belgio' },
        { value: 'Botswana', viewValue: 'Botswana' },
        { value: 'Canada', viewValue: 'Canada' },
        { value: 'China', viewValue: 'Cina' },
        { value: 'Colombia', viewValue: 'Colombia' },
        { value: 'France', viewValue: 'Francia' },
        { value: 'Germany', viewValue: 'Germania' },
        { value: 'Italy', viewValue: 'Italia' },
        { value: 'Spain', viewValue: 'Spagna' },
        { value: 'Southafrica', viewValue: 'Sudafrica' },
        { value: 'USA', viewValue: 'Torino' }
    ];
    ngOnInit(): void { }

    sumbit() {
        if (!this.registrationFormGroup.valid) {
            return;
        }
    }
}

