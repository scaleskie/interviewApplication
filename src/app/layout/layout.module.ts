import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SharedModule} from "../shared/modules/shared.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent]
})
export class LayoutModule { }
