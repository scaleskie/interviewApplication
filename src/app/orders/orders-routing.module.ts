import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewOrdersComponent} from "./orders/new-orders/new-orders.component";
import {EditOrdersComponent} from "./orders/edit-orders/edit-orders.component";
import {DeleteOrdersComponent} from "./orders/delete-orders/delete-orders.component";

const routes: Routes = [
  { path: 'new-orders', component: NewOrdersComponent },
  { path: 'edit-orders', component: EditOrdersComponent },
  { path: 'delete-orders', component: DeleteOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
