import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 


@Component({
    selector: 'component-4',
    templateUrl: './component4.component.html',
    styleUrls: ['./component4.component.scss']
})
export class PjNcComponent4 implements OnInit {
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
