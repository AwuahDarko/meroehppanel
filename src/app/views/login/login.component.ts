import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackbarService } from 'ngx-snackbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  errorText = '';

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password'))
      .value;

    this.login(email, password);
  }

  login(email: string, password: string): void {
    this.loading = true;
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    this.http
      .post(`https://meroehp.online/api/panel_login`, formData)
      .subscribe(
        (res) => {
          this.loading = false;
          localStorage.setItem('token', res['access_token']);

          this.router.navigate([`dashboard`]);
        },
        (err) => {
          this.loading = false;
          const errorlabel = document.getElementById('err');
          this.errorText = err['error'];
          errorlabel.classList.add('show');
          errorlabel.classList.remove('hide');
          setTimeout(() => {
            errorlabel.classList.add('hide');
            errorlabel.classList.remove('show');
          }, 3000);
          console.log(err);
        }
      );
  }
}
