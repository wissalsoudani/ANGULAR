import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/Product";

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  productList!: Product[] ;
  product: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product= new Product();
    this.productService.getProduct().subscribe(
      (data: Product[]) => this.productList = data);

  }




}
