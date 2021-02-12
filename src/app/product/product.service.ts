import { Injectable } from '@angular/core';
import { Logger } from '@app/core';
import { DatabaseService } from '@app/core/database/database.service';
import { IError } from '@app/model/error.model';
import { IProduct } from '@app/model/product.model';
import { environment } from '@env/environment';
import { v4 as uuidv4 } from 'uuid';

const log = new Logger('ProductService');

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private databaseService: DatabaseService) { }

  async getProduct(productId: string): Promise<IProduct> {
    return await this.databaseService.getDocumentById(productId);
  }

  /**
   * get all products from the database
   * 
   * @returns [IProduct] Array
   */
  async getProducts(): Promise<IProduct[] | IError> {
    return await this.databaseService.getAllProducts();
  }

  /**
   * Save product to database
   * @param product 
   * 
   * @returns {IProduct} Promise | Error
   */
  async saveProduct(product: IProduct) : Promise<any> {
    product._id = this.randomProductId;
    product.createdDate = new Date().toISOString();
    product.updatedDate = new Date().toISOString();
    return await this.databaseService.createDocument(product);
  }

  /**
   * Update product to database
   * @param product 
   * 
   * @returns {IProduct} Promise | Error
   */
  async updateProduct(id: string, product: IProduct) : Promise<any> {
    product.updatedDate = new Date().toISOString();
    return await this.databaseService.updateDocument(id, product);
  }

  async deleteProduct(id: string[]) : Promise<any> {
    return await this.databaseService.deleteMultipleProducts(id);
  }
  
  /**
   * Get unique uuid for product _id
   * 
   * @returns {string} 
   */
  private get randomProductId(): string {
    const uuid = uuidv4();
    const productId = `${environment.PRODUCT_COL_PREFIX}${uuid}`;
    return productId;
}
}
