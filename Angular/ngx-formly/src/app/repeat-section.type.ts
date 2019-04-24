import { Component } from "@angular/core";
import { FieldArrayType } from "@ngx-formly/core";

@Component({
  selector: "formly-repeat-section",
  template: `
    <div class="col-sm-2 float-right ">
      <i class="fa fa-plus fa-2x" (click)="add()">{{ to.addText }}</i>
    </div>
    <div *ngFor="let field of field.fieldGroup; let i = index" class="row ">
      <formly-field class="col" [field]="field"></formly-field>
      <div class="col-sm-2 d-flex align-items-center">
        <i class="fa fa-trash fa-2x" (click)="remove(i)"></i>
      </div>
    </div>
  `
})
export class RepeatTypeComponent extends FieldArrayType {}
