import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../services/product.service";


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  product!: Product;
  list!: Product[];
  productList!: Product[] ;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product= new Product();
    this.productService.getProduct().subscribe(
      (data: Product[]) => this.list = data);
  }

  save(){
    this.productService.postProduct(this.product).subscribe(
      () => this.list = [this.product, ...this.list]
    );

  }
}
