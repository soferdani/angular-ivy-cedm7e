import { createAction, props } from '@ngrx/store';
import { IUsers } from '../info-box/users.model';

export const retrievedUsersList = createAction(
  '[Users List/API] Retrieve Users Success',
  props<{ users: any }>()
);
