import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Logger } from '@app/core';
import { IProduct } from '@app/model/product.model';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { ProductService } from '../product.service';
const log = new Logger('ProductListCOmponent');

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[];
  products: IProduct[] = [];
  public loading: boolean = true;
  public selectedProduct: IProduct[] = [];
  constructor(private productService: ProductService, public dialog: MatDialog) {
    this.displayedColumns = ['action', 'productName', 'productType', 'quantity', 'price', 'vendor', 'edit']
  }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts() {
    this.loading = true;
    this.selectedProduct = [];
    this.productService.getProducts().then((products: IProduct[]) => {
      this.loading = false;
      this.products = products;
    }).catch(err => {
      this.loading = false;
      log.debug(err);
    })
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddEditProductComponent, { width: '730px' });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getproducts();
      }
    });
  }

  editProduct(product) {
    const dialogRef = this.dialog.open(AddEditProductComponent, { width: '730px', data : product });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getproducts();
      }
    });
  }

  removeProduct() {
    const ids = this.selectedProduct.map(product => product._id);
    this.productService.deleteProduct(ids).then((response) => {
      this.getproducts();
    }).catch((err) => {
      log.debug(err);
    })
  }

  toggle(item, list) {
    let idx = list.indexOf(item);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(item);
    }
  }

  exists(item, list) {
    return list.indexOf(item) > -1;
  }

  isChecked(x, t) {
    return t.length ? x.length === t.length : false;
  }

  toggleAll(x, t) {
    let l1 = x.length,
      l2 = t.length;
    if (l1 === l2) {
      x.splice(0, l1);
    } else if (l1 === 0 || l1 > 0) {
      x.splice(0, l2);
      t.forEach(y => x.push(y));
    }
  }
}
