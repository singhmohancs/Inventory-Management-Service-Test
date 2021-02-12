import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Logger } from '@app/core';
import { ProductService } from '../product.service';
const log = new Logger('AddEditProductComponent');

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  public loading: boolean = false;
  public productForm: FormGroup;
  public edit: boolean = false;
  private productId: string;
  constructor(private formBuilder: FormBuilder, 
              private productService: ProductService,
              public dialogRef: MatDialogRef<AddEditProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.createForm();
    if(this.data) {
      this.edit = true;
      this.productId = this.data._id;
      this.productForm.patchValue(this.data);
    }
  }

  private createForm() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productType: [''],
      price: [0, Validators.required],
      vendor: [''],
      quantity: [1],
      description: ['']
    });
  }

  updateProduct() {
    const request = this.edit ? this.productService.updateProduct(this.productId, this.productForm.value) : 
    this.productService.saveProduct(this.productForm.value);
    request.then((response) => {
      this.dialogRef.close(response)
    }).catch(err => {
      log.debug(err);
    })
  }
}
