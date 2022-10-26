import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  checked: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }
}
