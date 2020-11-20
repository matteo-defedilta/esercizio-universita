import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor(private httpClient:HttpClient) { }

  callChangeValue(): Observable<any> {
    return this.httpClient.get(`https://api.exchangeratesapi.io/latest`);
  }
}
