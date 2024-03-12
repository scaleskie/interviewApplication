import { NgModule } from '@angular/core'
import { AppComponent } from '../app.component';
import {NewUserComponent} from "./new-user/new-user.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import {UsersRoutingModule} from "./users-routing.module";
import {SharedModule} from "../shared/modules/shared.module";

@NgModule({
  declarations: [
   NewUserComponent,
    DeleteUserComponent,
    SearchUserComponent
  ],
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  exports: [
    NewUserComponent,
    DeleteUserComponent,
    SearchUserComponent
  ],
  bootstrap: [AppComponent]
})
export class UsersModule { }
