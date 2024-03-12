import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrdersModule} from "./orders/orders.module";
import {EventsModule} from "./events/events.module";
import {LayoutModule} from "./layout/layout.module";
import {UsersModule} from "./users/users.module";
import {SharedModule} from "./shared/modules/shared.module";
import {ProductModule} from "./product/product.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    OrdersModule,
    EventsModule,
    UsersModule,
    SharedModule,
    ProductModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
