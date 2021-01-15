import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'rscomponent5',
    templateUrl: 'rscomponent5.component.html',
    styleUrls: ['rscomponent5.component.scss']
})
export class RsComponent5 implements OnInit {
    constructor() { }
    email = new FormControl('', [Validators.required, Validators.email]);

    ngOnInit(): void { } 
    
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}