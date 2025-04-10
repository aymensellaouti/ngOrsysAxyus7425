import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "../config/app-routes.config";
import { TodoComponent } from "./todo/todo.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      }
    ]),
  ],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
