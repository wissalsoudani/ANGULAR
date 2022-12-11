import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../model/Product";


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id!: number;
  title!: string;
  price!: number;
  quantity!: number;
  like!: number;  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    this.title= this.route.snapshot.params.title;
    this.price= this.route.snapshot.params.price;
    this.quantity= this.route.snapshot.params.quantity;
    this.like= this.route.snapshot.params.like;


  }

}
