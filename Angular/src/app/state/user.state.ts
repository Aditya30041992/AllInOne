import { User } from '../models/User';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddUser } from '../actions/user.action';
import { finalize, tap } from 'rxjs/operators';




export class UserStateModel {
    users: User[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
    
})

export class Reset {
    static readonly type = 'Reset';
  }

export class UserState {
   // constructor(private appService: AppService) {}

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users;
    }

    @Action(AddUser)
    add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }

  
}