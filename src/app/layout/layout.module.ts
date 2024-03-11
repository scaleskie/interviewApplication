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

@NgModule({
  declarations: [
    HeaderComponent,
    DataTableComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    PanelModule,
    TableModule,
    MenubarModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    AvatarModule
  ],
  exports: [
    HeaderComponent,
    DataTableComponent,
    DashboardComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent]
})
export class LayoutModule { }
