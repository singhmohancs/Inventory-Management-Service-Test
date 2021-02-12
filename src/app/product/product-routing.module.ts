import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  Shell.childRoutes(
    [
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full'
      },
      {
        path: 'product',
        component: ProductComponent,
        canActivate: [AuthenticationGuard],
        data: { title: 'Product' },
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { 
            path: 'list', 
            component: ProductListComponent,
            data: { title: 'product/list' }
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            data: { title: 'Product detail'}
          }
        ]
      }
    ]
  )
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
