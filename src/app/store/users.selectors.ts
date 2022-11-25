import { createFeatureSelector } from '@ngrx/store';
import { IUsers } from '../info-box/users.model';

export const selectUsers = createFeatureSelector<any>('users');
