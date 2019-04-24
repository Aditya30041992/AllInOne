import { FormBuilder } from '@angular/forms';
import { ToDoFormComponent } from './todo.component';

describe('ToDoFormComponent', () => {
     var component : ToDoFormComponent;
    
     beforeEach( ()=> {
         component = new ToDoFormComponent(new FormBuilder());
     });

     it('Should Create the Form with 2 Controls ', () => {
        expect(component.form.contains('name')).toBeTruthy();
     });


     it('should make the name control required ', () => {
        let control = component.form.get('name');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

});