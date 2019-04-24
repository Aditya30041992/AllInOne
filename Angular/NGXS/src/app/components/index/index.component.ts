import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Store, State } from '@ngxs/store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users:Observable<User>;

  constructor(private store: Store) {
    this.users= this.store.select(state => state.users.users); //if the user’s state array is changed then
                                                              // this component rerenders and display the changes. 
   }

  ngOnInit() {
  }

}
