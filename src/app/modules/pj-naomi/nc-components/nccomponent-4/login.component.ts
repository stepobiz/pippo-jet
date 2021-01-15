import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 


@Component({
    selector: 'nc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class NcLogin implements OnInit {
    [x: string]: any;
    ncloginFormGroup: FormGroup;
    constructor(
    _private_formBuilder: FormBuilder,
    ) { 
        this.ncloginFormGroup = this.formBuilder.group({
            email: ['',[Validators.required, Validators.email]],
            password: ['',[Validators.required]]    
        });

    }

 



    ngOnInit(): void {
        
        

     }

     submit() {
         if (!this.ncloginFormGroup.valid){
             return;
         }
     }
}
