import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
