import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { CustomMaterialModule } from './material/custom-material.module';
import { AuthModule } from '@app/auth/auth.module';
import { ProductModule } from '@app/product/product.module';
import { ShellModule } from './shell/shell.module';
import { DatabaseService } from './core/database/database.service';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShellModule,
    CoreModule,
    CustomMaterialModule.forRoot(),
    AuthModule,
    ProductModule,
    SharedModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
