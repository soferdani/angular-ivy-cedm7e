import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  public getUsersInfoFromApi(): Observable<any> {
    const url =
      'https://innovi-front-end.s3.us-west-2.amazonaws.com/customers.json';
    return this.httpClient.get(url).pipe(map((users: any) => users.data));
  }
}
