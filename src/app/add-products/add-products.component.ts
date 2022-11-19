import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  product!: Product;
  list!: Product[];

  constructor() { }

  ngOnInit(): void {
    this.product= new Product();
    this.list=[];
    console.log(this.list);

  }

  save(){
    this.product.like=0;
    this.list.push(this.product);
    console.log('after the click');
    console.log(this.list);
  }
}
