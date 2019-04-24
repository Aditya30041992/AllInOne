import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {FormGroup ,FormBuilder, Validators } from '@angular/forms';
import { AddUser } from 'src/app/actions/user.action';
import {  Reset } from 'src/app/state/user.state';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angularForm:FormGroup;

  constructor(private formBuilder: FormBuilder , private store:Store) {
    
  }

  
   
     // This function is used to Create new user.
    
   createForm() {
     this.angularForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required]
     });
  }
    
     // This function is  modify the state of the store.
     
    addUser(name, email) {
      this.store.dispatch(new AddUser({ name, email})); 
  }
  reset() {
    this.store.dispatch(new Reset());
  }

 
  
  
    ngOnInit() {
      this.createForm();
     
  }


  }




