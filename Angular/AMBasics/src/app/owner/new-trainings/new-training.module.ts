import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTrainingComponent } from './new-training/new-training.component';
import { NewtrainingRoutingModule } from 'src/app/owner/new-trainings/newtraining-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TrainingService } from 'src/app/services/training.service';



@NgModule({
  declarations: [
    NewTrainingComponent,

  ],
  imports: [
    CommonModule,
    NewtrainingRoutingModule,
    MaterialModule,
    AmazingTimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule.forRoot() 
  ],
  providers:[TrainingService]
})
export class NewTrainingsModule { }
