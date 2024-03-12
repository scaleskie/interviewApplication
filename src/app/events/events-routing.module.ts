import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpcomingEventsComponent} from "./upcoming-events/upcoming-events.component";
import {ArchivedEventsComponent} from "./archived-events/archived-events.component";
import {
  CreateUpcomingEventComponent
} from "./upcoming-events/create-upcoming-event/create-upcoming-event.component";
import {
  DeleteUpcomingEventComponent
} from "./upcoming-events/delete-upcoming-event/delete-upcoming-event.component";

const routes: Routes = [
 { path: 'upcoming-events', component: UpcomingEventsComponent,
    children: [
      {
        path: 'create',
        component: CreateUpcomingEventComponent,
      },
      {
        path: 'delete',
        component: DeleteUpcomingEventComponent,
      },
    ],
  },
  { path: 'archived-events', component: ArchivedEventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
