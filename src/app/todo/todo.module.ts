import { NgModule } from '@angular/core';
import { WeekTodoComponent } from './week-todo/week-todo.component';
import { TodoComponent } from './todo/todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  // directives + pipes + composants qui appartiennent à ce module
  declarations: [TodoComponent, WeekTodoComponent],
  // Les modules nécessaires pour mon fonctionnement
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ],
  // Ce que je partage avec les autres modules
  exports: [
    // Ici je peux mettres mes pipes mes directives, mes composants
    // Les modules que j'importe
  ],
})
export class TodoModule {}
