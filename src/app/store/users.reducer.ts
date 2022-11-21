import { createReducer, on } from '@ngrx/store';
import { IUsers } from '../info-box/users.model';
import { retrievedUsersList } from './users.actions';

export const initialState: any = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUsersList, (state, { users }) => users)
);
