import { createReducer, on } from '@ngrx/store';
import { IUsers } from '../info-box/users.model';

export const initialState: ReadonlyArray<IUsers> = [];

export const usersReducer = createReducer(initialState);
