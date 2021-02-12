import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { CustomMaterialModule } from '@app/material/custom-material.module';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [CommonModule, CustomMaterialModule, RouterModule, FlexLayoutModule],
  providers: [HeaderComponent],
  exports: [],
  entryComponents: []
})
export class ShellModule {}
