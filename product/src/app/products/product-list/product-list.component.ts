import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  categories: any;
  products: any;
  selectedCategory: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  getCategories = () => {
    this.productService.getCategories().subscribe((response: any) => {
      console.log(response, 'categories response');
      this.categories = response;
    });
  };

  getProducts = () => {
    this.productService.getProducts().subscribe((response: any) => {
      console.log('products response', response);
      this.products = response;
    });
  };

  categoryChange = (data: any) => {
    console.log(data.target.value, 'data');
    this.categories = this.products.find(
      (el: any) => el.categoryId === data.target.value
    );
    console.log(this.categories, 'this.categories');
  };

  productDetails = () => {
    this.router.navigateByUrl('productDetails/:id');
  };
}
