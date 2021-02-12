import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '@app/material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullLoaderComponent } from './full-loader/full-loader.component';
import { InlineLoaderComponent } from './inline-loader/inline-loader.component';
import { LoaderService } from './full-loader/loader.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  declarations: [FilterPipe, FullLoaderComponent, InlineLoaderComponent],
  providers: [LoaderService],
  exports: [FilterPipe, FullLoaderComponent, InlineLoaderComponent]
})
export class SharedModule {}
