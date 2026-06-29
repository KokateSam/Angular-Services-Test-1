import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Validatelogin {
  constructor(private http: HttpClient) { }

  loginValidate(encryptLoginUser: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    // const hder={
    //   Headers:new  HttpHeaders({
    //     'Content-type':'application/json',
    //     'Accept':'application/json'
    //   })
    // }


    let jsonString =JSON.stringify(JSON.stringify(encryptLoginUser));

    return this.http.post('https://localhost:7050/api/LoginValidate', jsonString, httpOptions);
    //return this.http.post('https://localhost:7050/api/LoginValidate', encryptLoginUser,{headers});
  }
  GetCompany(userid:number):Observable<any>{
    //let jsonString =JSON.stringify(JSON.stringify(userid));

    return this.http.post('https://localhost:7050/api/GetUserCompanies', userid);
  }

  Userlogin(userinfo:any):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    //error handling using catchError oprator
    let iUserinfo=JSON.stringify(JSON.stringify(userinfo))
    return this.http.post('https://localhost:7050/api/login', iUserinfo,httpOptions).pipe(
      catchError(error=>{
        console.log('Error Handeled in service:',error);
        return throwError(()=>error)
      }));

  }

}
