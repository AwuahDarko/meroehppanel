import { Injectable } from '@angular/core';
import { TenantInformation } from '../models/tenant-details';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tenant_list: TenantInformation[] = [];

  constructor(private auth: AuthenticationService, private http: HttpClient) {}

  fetchAllTenants(): Promise<TenantInformation[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.auth.url}/tenant_details`, {
          headers: this.auth.getHeader(),
        })
        .subscribe(
          (res) => {
            const data: any[] = res['data'];

            data.forEach((one_data) => {
              this.tenant_list.push(new TenantInformation(one_data));
            });

            resolve(this.tenant_list);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });
  }
}
