import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productId: any;
  productDetails: any;
  productCategoryId: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id']; // Access the 'id' parameter from the URL
      this.productCategoryId = params['cid'];
      this.getProductData(this.productId);
    });
  }

  getProductData = (productId: any) => {
    this.productService.getProductDetails(productId).subscribe((response: any) => {
      this.productDetails = response
    })
  }

}
