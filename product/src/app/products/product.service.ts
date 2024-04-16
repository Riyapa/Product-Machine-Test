import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:3000/categories';
  private productUrl = 'http://localhost:3000/products';
  private productDetailsUrl = 'http://localhost:3000/productDetails';


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

// {
//   "categories": [{
//   "id": 1,
//   "name": "Laptops"
//   }, {
//   "id": 2,
//   "name": "Mobiles"
//   }, {
//   "id": 3,
//   "name": "Speakers"
//   }]
//   }

// {
//   "products": [
//     {
//       "id": 1,
//       "name": "Lenovo",
//       "imageUrl": "assets/dummyimg.png",
//       "categoryId": 1
//     },
//     {
//       "id": 2,
//       "name": "Mac",
//       "imageUrl": "assets/dummyimg.png",
//       "categoryId": 1
//     },
//     {
//       "id": 3,
//       "name": "Dell",
//       "imageUrl": "assets/dummyimg.png",
//       "categoryId": 1
//     },
//     {
//       "id": 4,
//       "name": "iphone",
//       "imageUrl": "assets/dummyimg.png",
//       "categoryId": 2
//     },
//     {
//       "id": 5,
//       "name": "boat",
//       "imageUrl": "assets/dummyimg.png",
//       "categoryId": 3
//     }
//   ]
// }

// {
//   "productDetails": {
//     "id": 1,
//     "name": "Lenovo",
//     "imageUrl": "assets/dummyimg.png",
//     "description": "Dummy description",
//     "categoryId": 1
//   }
// }
