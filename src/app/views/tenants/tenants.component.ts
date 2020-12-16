import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackbarService } from 'ngx-snackbar';
import { TenantInformation } from '../../models/tenant-details';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css'],
})
export class TenantsComponent implements OnInit, AfterViewInit {
  logo_url: string =
    'https://ui-avatars.com/api/?size=300&background=random&name=';

  snackbar_color = '#20B2AA';
  tenant_list: TenantInformation[] = [];
  filtered_tenant_list: TenantInformation[] = [];

  constructor(
    private auth: AuthenticationService,
    private http: HttpClient,
    private snackbarService: SnackbarService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchAllTenants();
  }

  ngAfterViewInit(): void {}

  fetchAllTenants(): void {
    this.http
      .get(`${this.auth.url}/tenant_details`, { headers: this.auth.getHeader })
      .subscribe(
        (res) => {
          const data: any[] = res['data'];

          data.forEach((one_data) => {
            this.tenant_list.push(new TenantInformation(one_data));
          });
          this.filtered_tenant_list = this.tenant_list;
          this.dataService.tenant_list = this.tenant_list;
        },
        (err) => {
          console.log(err);
          this.showNotification(
            'Could not get tenants, please check your internet connection',
            '#FF4500',
            5000
          );
        }
      );
  }

  showNotification(message: string, bg_color: string, time: number): void {
    this.snackbar_color = bg_color;

    this.snackbarService.add({
      msg: `<strong style="color: white" >${message}</strong>`,
      timeout: time,
      action: {
        text: '',
        onClick: (snack) => {
          console.log('dismissed: ' + snack.id);
        },
      },
      onAdd: (snack) => {
        console.log('added: ' + snack.id);
      },
      onRemove: (snack) => {
        console.log('removed: ' + snack.id);
      },
    });
  }

  searchTenants(event: Event) {
    const query: string = (<HTMLInputElement>event.target).value;

    this.filtered_tenant_list = [];
    this.tenant_list.forEach((one_tenant) => {
      if (one_tenant.tenant_name.includes(query)) {
        this.filtered_tenant_list.push(one_tenant);
      }
    });
  }

  navigateToTenantsDetails(fqdn: string): void {
    this.router.navigate([`tenants-detail`], {
      queryParams: { fqdn },
    });
  }
}
