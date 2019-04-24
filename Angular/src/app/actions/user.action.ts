import { User } from 'src/app/models/User';

export class AddUser {
    static readonly type = '[User] AddUserToIndexPage';

    constructor(public payload: User) {}

}
export class LogOutComplete {
    static readonly type = '[User] RemoveUserFromIndexPage';

    constructor(public payload: User) {}

}
