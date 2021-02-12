import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logger } from '@app/core';
import { IProduct } from '@app/model/product.model';
import { ProductService } from '../product.service';
const log = new Logger('ProductDetailsCOmponent');

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params['id'];
    this.productDetails(productId);
  }

  productDetails(productId) {
    this.productService.getProduct(productId).then((product: IProduct) => {
      this.product = product;
    }).catch(err => {
      log.debug(err);
    })
  }
}
