import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataTableComponent} from "./data-table/data-table.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'data-table', component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
