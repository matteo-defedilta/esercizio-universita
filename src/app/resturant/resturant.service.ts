import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  constructor(private httpClient:HttpClient) { }

  searchProduct(inputField?:string): Observable<any> {
    return this.httpClient.get(`https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop?search=${inputField || ''}`);
  }
}
