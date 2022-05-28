import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { repeat } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL = 'http://localhost:8080';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

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
      (response) => {
        if (response) {
          // localStorage.setItem(this.TOKEN_KEY, res.token);
          window.location.href="http://onecause.com"
        }
      },
      (err: any) => {
        console.log(err);
        this.snackBar.open('INVALID USERNAME / PASSWORD', 'X', { duration: 4000, panelClass: ['red-snackbar']});
      }
    );
  }
}
