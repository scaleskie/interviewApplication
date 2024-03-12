import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import {NewOrdersComponent} from "./new-orders/new-orders.component";
import {DeleteOrdersComponent} from "./delete-orders/delete-orders.component";
import {EditOrdersComponent} from "./edit-orders/edit-orders.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {SharedModule} from "../shared/modules/shared.module";

@NgModule({
  declarations: [
    NewOrdersComponent,
    DeleteOrdersComponent,
    EditOrdersComponent
  ],
  imports: [
    OrdersRoutingModule,
    SharedModule
  ],
  exports: [
    NewOrdersComponent,
    DeleteOrdersComponent,
    EditOrdersComponent
  ],
  bootstrap: [AppComponent]
})
export class OrdersModule { }
