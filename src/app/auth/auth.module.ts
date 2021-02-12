import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '@app/material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppAuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';


@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FlexLayoutModule, AppAuthRoutingModule,FormsModule, CustomMaterialModule.forRoot()],
  declarations: [LoginComponent, AuthComponent]
})
export class AuthModule {}
