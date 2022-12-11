import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {CalculService} from "./calcul.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url= 'http://localhost:3000/products';
  productList!: Product[];
  priceMax!: number;
  alertStock!: number;

  // @ts-ignore
  //constructor(private serviceCal: CalculService) {
  //}

  constructor(private http: HttpClient) {}

    getProduct(){
      return this.http.get<Product[]>(this.url);
  }

  postProduct(p:Product){
    return this.http.post(this.url,p);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + '/' +id); }

  buyProduct(i: number) {
    this.productList[i].quantity--;
  }

  likeProduct(i: number) {
    this.productList[i].like++;
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }


}
