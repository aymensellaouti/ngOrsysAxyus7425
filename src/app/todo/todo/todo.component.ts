import { Component, inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  private readonly todoService = inject(TodoService);
  // L'état du composant
  protected todos: Todo[] = this.todoService.getTodos();
  protected todo = new Todo();
  constructor() {}
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
