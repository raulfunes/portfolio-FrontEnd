import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = "https://portfolio-backend-production-f664.up.railway.app";
  token = "";

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post(this.uri + '/auth/login', { username: username, password: password });


  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  get getToken(): string {
    return localStorage.getItem('auth_token');
  }

  public get logeedIn(): boolean {
    return (localStorage.getItem('auth_token') !== null)
  }
}
