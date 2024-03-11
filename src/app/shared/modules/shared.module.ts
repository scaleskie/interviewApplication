import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {PanelModule} from "primeng/panel";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ForbiddenEntryValidatorDirective} from "./invalid-entry.directive";
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    PanelModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    ForbiddenEntryValidatorDirective
  ],
  exports: [
    CommonModule,
    TableModule,
    DialogModule,
    PanelModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    ForbiddenEntryValidatorDirective
  ],
  bootstrap: [AppComponent]
})
export class SharedModule { }
