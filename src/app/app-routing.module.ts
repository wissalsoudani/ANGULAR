import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {AddProductsComponent} from "./add-products/add-products.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'AddProduct', component: AddProductsComponent},
  {path:'products/:id', component: DetailProductComponent },
  {path:'todoList', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
