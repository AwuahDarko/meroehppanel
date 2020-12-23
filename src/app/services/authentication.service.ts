import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'https://panel.meroehp.xyz/api';

  getHeader = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  header = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}
}
