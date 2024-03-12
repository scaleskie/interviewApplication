import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import {UpcomingEventsComponent} from "./upcoming-events/upcoming-events.component";
import {ArchivedEventsComponent} from "./archived-events/archived-events.component";
import {
  CreateUpcomingEventComponent
} from "./upcoming-events/create-upcoming-event/create-upcoming-event.component";
import {
  DeleteUpcomingEventComponent
} from "./upcoming-events/delete-upcoming-event/delete-upcoming-event.component";
import {EventsRoutingModule} from "./events-routing.module";
import {
  UpcomingEventsTableComponent
} from "./upcoming-events/upcoming-events-table/upcoming-events-table.component";
import {TableModule} from "primeng/table";
import {SharedModule} from "../shared/modules/shared.module";

@NgModule({
  declarations: [
    UpcomingEventsComponent,
    CreateUpcomingEventComponent,
    DeleteUpcomingEventComponent,
    ArchivedEventsComponent,
    UpcomingEventsTableComponent
  ],
  imports: [
    EventsRoutingModule,
    SharedModule
  ],
  exports: [
    UpcomingEventsComponent,
    CreateUpcomingEventComponent,
    DeleteUpcomingEventComponent,
    ArchivedEventsComponent,
    UpcomingEventsTableComponent
  ],
  bootstrap: [AppComponent]
})
export class EventsModule { }
