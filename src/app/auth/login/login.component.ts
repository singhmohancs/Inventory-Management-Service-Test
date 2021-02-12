import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Logger, AuthenticationService } from '@app/core';
import { LoaderService } from '@app/shared/full-loader/loader.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm: FormGroup;
  success_message: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private loaderService: LoaderService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  doLogin() {
    this.error = '';
    this.loaderService.show();
    this.authenticationService.login(this.loginForm.value).then(
      response => {
        this.loaderService.hide();
        this.router.navigate(['/', 'product']);
      }
    ).catch((err) => {
      this.loaderService.hide();
      this.error = err.message;
    })
    
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
