import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.service'; // Assuming Product interface is defined in product.service.ts
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => this.products = data)
      .then(console.log)
      .catch(error => this.errorMessage = error.message);
  }

}
