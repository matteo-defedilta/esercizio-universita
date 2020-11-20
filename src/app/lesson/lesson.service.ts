import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient:HttpClient) { }

  callLessonList(): Observable<any> {
    return this.httpClient.get(`https://teledidattica.unich.it/api/lesson`);
  }
 
}
