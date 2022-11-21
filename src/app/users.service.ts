import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IDataUsers } from './info-box/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  public getUsersInfoFromApi(): Observable<IDataUsers> {
    const url =
      'https://innovi-front-end.s3.us-west-2.amazonaws.com/customers.json';
    return this.httpClient.get(url).pipe(map((users: any) => users.data));
  }
}
