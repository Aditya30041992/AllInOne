import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { timer } from 'rxjs';
import { TrainingService } from 'src/app/services/training.service';




@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  roomNames = [
    { id: 1, value: "Drenthe" },
    { id: 2, value: "Flevoland" },
    { id: 3, value: "Gelderland" }
  ];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private apt: AmazingTimePickerService,
               private trainingService:TrainingService) { }

  ngOnInit() {
  }

  onCreateButtonClicked(){
    this.router.navigate(['/owner/owners'], { relativeTo: this.route })

  }
  onCancelButtonClicked(){

  }
  onBackbuttonClicked(){
    this.router.navigate(['/owner/owners'], { relativeTo: this.route })

  }

  open(){
    const amazingTimePicker = this.apt.open();
    amazingTimePicker.afterClose().subscribe(timer =>{
      console.log(timer);
    });
  }

  
}
