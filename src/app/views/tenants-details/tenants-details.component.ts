import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'ngx-snackbar';
import { SidebarItem } from 'src/app/models/sidebar-items';
import { TenantInformation } from 'src/app/models/tenant-details';
import { tenants_details_menu } from '../../menu/menu';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tenants-details',
  templateUrl: './tenants-details.component.html',
  styleUrls: ['./tenants-details.component.css'],
})
export class TenantsDetailsComponent implements OnInit {
  menu: SidebarItem[] = [];
  fqdn: string = '';
  card_title: string = 'Tenant Information';
  tenant: TenantInformation;
  snackbar_color = '#20B2AA';

  popoverTitle = 'Suspend tenant?';
  popoverMessage = 'Access to MeroeHp for this tenant will be revoked';
  confirmClicked = false;
  cancelClicked = false;

  popoverTitle2 = 'Activate tenant?';
  popoverMessage2 = 'This will grant this tenant access to MeroeHp';
  confirmClicked2 = false;
  cancelClicked2 = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackbarService,
    private http: HttpClient,
    private auth: AuthenticationService
  ) {
    tenants_details_menu.forEach((menu) => {
      this.menu.push(new SidebarItem(menu));
    });
  }

  ngOnInit(): void {
    // ?=== fetch tenants if its empty ====
    if (this.dataService.tenant_list.length == 0) {
      this.dataService
        .fetchAllTenants()
        .then((data) => {
          this.setData();
        })
        .catch((err) => {
          console.log(err);

          this.showNotification(
            'Could not get tenants, please check your internet connection',
            '#FF4500',
            5000
          );
        });
    }

    this.getQueryFromUrl();
    this.setData();
  }

  getQueryFromUrl(): void {
    this.route.queryParams.subscribe((params) => {
      this.fqdn = params['fqdn'];

      if (this.fqdn == undefined) {
        this.router.navigate([`tenants`]);
      }
    });
  }

  onMenuClicked(item: string): void {
    this.card_title = item;
  }

  setData(): void {
    for (const tenant of this.dataService.tenant_list) {
      if (tenant.tenant_name == this.fqdn) {
        this.tenant = tenant;
        break;
      }
    }
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

  deactivateTenant(): void {
    // const formData = new FormData();
    // console.log(this.tenant.tenant_email);
    // formData.append('email', this.tenant.tenant_email);
    const data = {
      email: this.tenant.tenant_email,
    };

    this.http
      .post(`${this.auth.url}/deactivate_tenant`, data, {
        headers: this.auth.header,
      })
      .subscribe(
        (res) => {
          this.showNotification(res['message'], '#008000', 5000);
          setTimeout(() => {
            this.router.navigate([`tenants-detail`]);
          }, 5000);
        },
        (err) => {
          this.showNotification(
            'Could not deactivate this tenant',
            '#FF4500',
            5000
          );
        }
      );
  }

  activateTenant(): void {
    const data = {
      email: this.tenant.tenant_email,
    };

    this.http
      .post(`${this.auth.url}/activate_tenant`, data, {
        headers: this.auth.header,
      })
      .subscribe(
        (res) => {
          this.showNotification(res['message'], '#008000', 5000);
          setTimeout(() => {
            this.router.navigate([`tenants-detail`]);
          }, 5000);
        },
        (err) => {
          console.log(err);
          this.showNotification(
            'Could not activate this tenant',
            '#FF4500',
            5000
          );
        }
      );
  }
}
