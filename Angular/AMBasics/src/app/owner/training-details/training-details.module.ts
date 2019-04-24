import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { AttendanceComponent } from './training-details/attendance/attendance.component';
import { FeedbackComponent } from './training-details/feedback/feedback.component';
import { TrainingDetailsRoutingModule } from 'src/app/owner/training-details/training-details-routing.module';

@NgModule({
  declarations: [TrainingDetailsComponent, AttendanceComponent, FeedbackComponent],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule
  ]
})
export class TrainingDetailsModule { }
