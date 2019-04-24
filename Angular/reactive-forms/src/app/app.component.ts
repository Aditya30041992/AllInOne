import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName(){
    return this.registrationForm.get('userName');
  }
  constructor(private formService: FormBuilder){}

  registrationForm = this.formService.group({
    userName: ['', [Validators.required, Validators.minLength(4)],forbiddenNameValidator],
    password: [''],
    confirmPassword: [''],
    address:this.formService.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });



  // registrationForm = new FormGroup({
//   userName: new FormControl('Aditya'),
//   password: new FormControl(''),
//   confirmPassword: new FormControl(' '),
//   address: new FormGroup({
//     city: new FormControl(''),
//     state: new FormControl(''),
//     postalCode: new FormControl('')
//   })
// });

loadApiData(){
  this.registrationForm.setValue({
  userName: 'Aditya',
  password: '1234',
  confirmPassword: '1234',
  address: {
    city: 'Nashik' ,
    state: 'Maharshtra',
    postalCode: '422004'
  } 
  });
}


// loadApiData(){
//   this.registrationForm.patchValue({
//   userName: 'Aditya',
//   password: '1234',
//   confirmPassword: '1234',
 
//   });
// }

}
