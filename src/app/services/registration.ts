import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Registration {
  
  constructor(private http:HttpClient){}
  registration(InputUserData:any):Observable<any>{

    return this.http.post('',InputUserData);
  }

}
