import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'https://meroehp.xyz/api';
  private token: string = 'pk_test_f294bfd261beaef058226449e030c0bd4e097aa8';

  getHeader = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
  });

  header = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}
}
