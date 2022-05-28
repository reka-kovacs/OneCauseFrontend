import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL = 'http://localhost:8080';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string, token: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const data = {
      username: username,
      password: password,
      token: token
    };

    this.http.post(this.API_URL+"/login", data, headers).subscribe(
      (res: any) => {
          localStorage.setItem(this.TOKEN_KEY, res.token);

          window.location.href="http://onecause.com"
      }
    );
  }
}
