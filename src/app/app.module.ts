import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import {AddProductsComponent} from "./add-products/add-products.component";
import { DetailProductComponent } from './detail-product/detail-product.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { UpdateProductsComponent } from './update-products/update-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent,
    DetailProductComponent,
    TodoListComponent,
    UpdateProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
