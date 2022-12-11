import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {CalculService} from "../services/calcul.service";
import {ProductService} from "../services/product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!: Product[] ;
  alertStock!: number;
  priceMax!: number;
  product!: Product;
  url= 'http://localhost:3000/products';


  // @ts-ignore
  // constructor(private serviceCal: CalculService) { }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.product= new Product();


    this.productService.getProduct().subscribe(
     (data: Product[]) => this.productList = data);

    // @ts-ignore
    this.productService.getAlertStock().subscribe(
      (data: Product[]) => this.productList= data);

    // @ts-ignore
    this.productService.likeProduct().subscribe(
      (data: Product[]) => this.productList= data);

    // @ts-ignore
    this.productService.buyProduct().subscribe(
      (data: Product[]) => this.productList= data);

  }
  deletecommand(id: number){
    this.productService.delete(id).subscribe(() => {
      this.productList = this.productList.filter(p => p.id != id )
    })
  }


  //getAlertStock() {
    //this.alertStock = this.serviceCal.getNumberOf(this.productList, 'quantity', 0);

  //}
}
