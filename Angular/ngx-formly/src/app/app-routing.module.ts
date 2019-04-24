import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MultiStepComponent } from './multi-step/multi-step.component';

const routes: Routes = [
  { path:'multistep',component: MultiStepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
