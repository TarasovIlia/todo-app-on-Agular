import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from "./model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  model = new Model();
  getName() {
  return this.model.user + ' ' + this.model.lastName
  }
  getTodoItems() {
    return  (
      this.model.items.filter(function(item : any){return !item.done})
    )
  }

  addItem(newItem : any) {
    if (newItem != "") {
    this.model.items.push(new TodoItem(newItem, false))
    }
  }
  constructor() { }


  ngOnInit(): void {
  }

}
