import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { RepeatTypeComponent } from "./repeat-section.type";

import { PanelWrapperComponent } from './panel-warpper.component';
import { MultiStepComponent } from './multi-step/multi-step.component';

export function minlengthValidationMessage(field) {
  return `Should have atleast ${field.templateOptions.minlength} characters`;
}

export function maxlengthValidationMessage(field) {
  return `This value should be less than ${
    field.templateOptions.maxLength
    } characters`;
}

export function minValidationMessage(field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function patternValidationMessage(field) {
  return `Should have atleast ${field.templateOptions.emailValidation} characters`;
}


@NgModule({
  declarations: [
    AppComponent,
    RepeatTypeComponent,
    PanelWrapperComponent,
    MultiStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
      ],
      validationMessages: [
        { name: "required", message: "This field is required" },
        { name: "minlength", message: minlengthValidationMessage },
        { name: "maxlength", message: maxlengthValidationMessage },
        { name: "min", message: minValidationMessage },
        { name: "max", message: maxValidationMessage },
        { name: "emailValidation", message: patternValidationMessage }
      ],
      types: [{ name: "repeat", component: RepeatTypeComponent }]
    }),
    FormlyBootstrapModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
