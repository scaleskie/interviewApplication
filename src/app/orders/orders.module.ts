import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FooterComponent } from './footer/footer.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {MenubarModule} from "primeng/menubar";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AvatarModule} from "primeng/avatar";
import {NewOrdersComponent} from "./orders/new-orders/new-orders.component";
import {DeleteOrdersComponent} from "./orders/delete-orders/delete-orders.component";
import {EditOrdersComponent} from "./orders/edit-orders/edit-orders.component";
import {OrdersRoutingModule} from "./orders-routing.module";

@NgModule({
  declarations: [
    NewOrdersComponent,
    DeleteOrdersComponent,
    EditOrdersComponent
  ],
  imports: [
    BrowserModule,
    OrdersRoutingModule
  ],
  exports: [
    NewOrdersComponent,
    DeleteOrdersComponent,
    EditOrdersComponent
  ],
  bootstrap: [AppComponent]
})
export class OrdersModule { }
