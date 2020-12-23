import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: AuthenticationService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  showOrHideMobileNavMenu() {
    var x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  logout(): void {
    this.http
      .post(`${this.auth.url}/panel_logout`, '', { headers: this.auth.header })
      .subscribe(
        (res) => {
          console.log(res);
          localStorage.clear();
          this.router.navigate([`login`]);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
