import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl,Validators } from "@angular/forms"; 
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
 
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      meetingName: new FormControl('',Validators.required),
      organiserName: new FormControl('',Validators.required),
      agenda: new FormControl('',[Validators.required, Validators.minLength(15)]),
      attendeeList: new FormControl(''),
      date: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      roomName:new FormControl('')
  });
}