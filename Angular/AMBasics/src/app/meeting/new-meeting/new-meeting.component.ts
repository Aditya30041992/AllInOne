import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { timer } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MeetingService } from 'src/app/services/meeting.service';


@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})
export class NewMeetingComponent implements OnInit {


  roomNames = [
    { id: 1, value: "Drenthe" },
    { id: 2, value: "Flevoland" },
    { id: 3, value: "Gelderland" }
  ];
  
  constructor( private router: Router,
               private route: ActivatedRoute,
               private apt: AmazingTimePickerService,
               private meetingService: MeetingService) { }

  ngOnInit() {
  }
  open(){
    const amazingTimePicker = this.apt.open();
    amazingTimePicker.afterClose().subscribe(timer =>{
      console.log(timer);
    });
  }
  onCreateButtonClicked(){
    this.router.navigate(['/meeting/meetings'], { relativeTo: this.route })
  }

  onCancelButtonClicked(){
    
  }

  onBackbuttonClicked(){
    this.router.navigate(['/meeting/meetings'], { relativeTo: this.route })

  }
 
}
