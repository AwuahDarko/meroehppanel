import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TenantSummary } from '../../models/tenants-summary';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tenant_summary: TenantSummary = new TenantSummary();

  card_one = {
    background_color: '#00acac',
    title: 'Tenants',
    number: this.tenant_summary.number_of_tenants,
    icon: 'fa-leaf',
    footer: 'Total number of tenants',
  };
  card_two = {
    background_color: '#348fe2',
    title: 'Total Subscriptions',
    number: this.tenant_summary.tenants_subscription_cancelled,
    icon: 'fa-bookmark-o',
    footer: 'Total number of subscribed tenants',
  };
  card_three = {
    background_color: '#727cb6',
    title: 'On Trial',
    number: this.tenant_summary.tenants_on_free_trial,
    icon: 'fa-tasks',
    footer: 'Total number of free trials',
  };
  card_four = {
    background_color: '#2d353c',
    title: 'Canceled Subscription',
    number: this.tenant_summary.tenants_subscription_cancelled,
    icon: 'fa-shield',
    footer: 'Number of canceled subscriptions',
  };

  constructor(
    private auth: AuthenticationService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get(`${this.auth.url}/tenant_summary`, {
        headers: this.auth.getHeader(),
      })
      .subscribe(
        (res) => {
          this.tenant_summary.setTenantSummary(res['data']);
          this.reloadSummary();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  reloadSummary(): void {
    this.card_one.number = this.tenant_summary.number_of_tenants;
    this.card_two.number = this.tenant_summary.tenants_on_subscription;
    this.card_three.number = this.tenant_summary.tenants_on_free_trial;
    this.card_four.number = this.tenant_summary.tenants_subscription_cancelled;
  }
}
