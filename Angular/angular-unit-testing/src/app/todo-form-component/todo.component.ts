import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

export class ToDoFormComponent{

    form : FormGroup;

    constructor(fb : FormBuilder){
        this.form = fb.group({

            name: ['',Validators.required],
            email: ['']
        });
    }
}