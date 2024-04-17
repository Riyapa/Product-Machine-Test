import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  categories: any = [];
  products: any = [];
  selectedProducts: any = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  getCategories = () => {
    this.productService.getCategories().subscribe((response: any) => {
      this.categories = response;
    });
  };

  getProducts = () => {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response;
       this.selectedProducts = this.products.filter((el: any) => el.categoryId == 1);
    });
  };

  categoryChange = (data: any) => {
    this.selectedProducts = this.products.filter((el: any) => el.categoryId == data.target.value);
  };

  productDetails = (pid: any, cid: any) => {
    this.router.navigateByUrl(`productDetails/${pid}/${cid}`);
  };
}
