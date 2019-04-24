// import { ToDoService } from './todo.service';
// import { OnInit } from '@angular/core';


// export class ToDoComponent implements OnInit{
//     todos : any[] = [];
//     message;

//     constructor(private service: ToDoService){

//     }

//     ngOnInit(){
//         this.service.getTodos().subscribe(t => this.todos =t );
//     }

//     add(){
//         var newToDo = { title: '...'};
//         this.service.add(newToDo).subscribe(
//             t => this.todos.push(t),
//             err => this.message = err);
        
//     }

//     delete(id){
//         if(confirm('Are you sure?'))
//         this.service.delete(id).subscribe();
//     }
// }