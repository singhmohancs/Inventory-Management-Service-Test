import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
import { CredentialsService } from './authentication/credentials.service';
import { AuthenticationGuard } from './authentication/authentication.guard';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    AuthenticationService,
    CredentialsService,
    AuthenticationGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
