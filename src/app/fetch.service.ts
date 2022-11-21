import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private httpClient: HttpClient) {}

  public getUsersInfoFromApi(): Observable<any> {
    const url =
      'https://innovi-front-end.s3.us-west-2.amazonaws.com/customers.json';
    return this.httpClient.get(url);
  }
}
