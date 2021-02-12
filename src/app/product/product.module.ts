import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '@app/shared';
import { CustomMaterialModule } from '@app/material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, AddEditProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [AddEditProductComponent]
})
export class ProductModule { }
