import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:3000/categories';
  private productUrl = 'http://localhost:3001/products';
  private productDetailsUrl = 'http://localhost:3002/productDetails';


  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get(this.url);
  }

  getProducts() {
    return this.httpClient.get(this.productUrl);
  }

  getProductDetails(params: any) {
    return this.httpClient.get(this.productDetailsUrl, params);
  }
}
