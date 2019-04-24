import { Component } from '@angular/core';
import { User } from './Models/user';
import { EnrollmentService } from './Services/enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 topics=['Angular', 'React', 'Vue'];
 topicHasError=true;


 usermodel= new User('Aditya','adi@gmail.com', 7276230062 ,'default','morning',true);
 
 constructor(private _enrollmentService: EnrollmentService){}
 
 validateTopic(value){
     if (value === 'default'){
       this.topicHasError = true;
     }
     else {
       this.topicHasError = false;
     }
   }
   onSubmit(){
     console.log(this.usermodel);
     this._enrollmentService.enroll(this.usermodel)
     .subscribe(
       data =>console.log('success', data),
       error => console.error('Error!',error)
     )
   }
}
