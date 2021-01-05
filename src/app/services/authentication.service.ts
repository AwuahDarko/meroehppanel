import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // url = 'https://panel.meroehp.xyz/api';
  url = 'https://panel.meroehp.online/api';

  constructor(private http: HttpClient) {}

  getHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
  }

  header(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
  }
}
