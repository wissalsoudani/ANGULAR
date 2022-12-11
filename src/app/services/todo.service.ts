import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url= 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get<[Todo]>(this.url);
  }
}
