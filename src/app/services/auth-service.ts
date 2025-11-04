import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authentication } from '../models/authentication';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient){}

  urlBase: string = "http://localhost:3000/";

  login(credentials: Credential): Observable<Authentication>{
    return this.http
    .post<Authentication>(`${this.urlBase}/login`, credentials)
    .pipe(
      tap((response)=>{
        if(response && response.accessToken){
          sessionStorage.setItem('token', response.accessToken);
        }
      }),
      catchError(()=>{
        return throwError(()=>{
          new Error('Authentication failed.')
        })
      })
    );
  }

  isAuthenticated(): boolean{
    const token = sessionStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }

  getToken(): string{
    const token = sessionStorage.getItem('token');
    if(token){
      return token;
    }
    return '';
  }

  logout(){
    sessionStorage.removeItem('token');
  }

}
