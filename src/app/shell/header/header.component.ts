import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, CredentialsService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  navLinks: any[] = [];
  
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { 
  }

  ngOnInit(): void {
  }

  doLogout() {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl("/auth/login");
    })
  }
}
