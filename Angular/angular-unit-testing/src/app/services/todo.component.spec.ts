// import { ToDoComponent } from './todo.component';
// import { ToDoService } from './todo.service';
// import { Observable } from 'rxjs/Observable';
// //import 'rxjs/add/observable/from';
// import { from } from 'rxjs';

// describe('ToDoComponent', () => {

//     let component: ToDoComponent;
//     let service : ToDoService;

//     beforeEach( () => {

//         component = new ToDoComponent(service);
//         service = new ToDoService(null);

//     });

//     it('sholud set todo property with items returned from the server', ()=> {

//         let todos = [1, 2, 3];
        
//         spyOn(service,'getTodos').and.callFake(() => {
//             return Observable.from([ todos ])
//         });

//         component.ngOnInit();

//         expect(component.todos).toBe(todos);
//     });

//  })