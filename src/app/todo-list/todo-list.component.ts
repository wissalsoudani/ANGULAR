import { Component, OnInit } from '@angular/core';
import {Todo} from "../model/todo";
import {CalculService} from "../services/calcul.service";
import {Product} from "../model/Product";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo!: Todo[];
  count! : number;
  constructor(private serviceCal : CalculService) { }

  ngOnInit(): void {
    this.listTodo=[
      {userId:1, id: 1, title:'task1', completed: true},
      {userId:1, id: 2, title:'task2', completed: false},
      {userId:1, id: 3, title:'task3', completed: true}
    ]
  }

getStat(){
 this.count = this.serviceCal.getNumberOf(this.listTodo,'completed', true);
 }

}
