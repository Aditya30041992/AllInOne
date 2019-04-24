import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl,Validators } from "@angular/forms"; 
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
 
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      topicName: new FormControl('',Validators.required),
      trainerName: new FormControl('',Validators.required),
      summary: new FormControl('',[Validators.required, Validators.minLength(15)]),
      date: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      roomName:new FormControl('')
  });

  
}