import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserComponent} from "./new-user/new-user.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {SearchUserComponent} from "./search-user/search-user.component";

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },
  { path: 'search-user', component: SearchUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
