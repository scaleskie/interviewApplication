import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import {ProductComponent} from "./product.component";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductTableComponent} from "./product-table/product-table.component";
import {SharedModule} from "../shared/modules/shared.module";

@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  exports: [
    ProductComponent,
    ProductTableComponent
  ],
  bootstrap: [AppComponent]
})
export class ProductModule { }
