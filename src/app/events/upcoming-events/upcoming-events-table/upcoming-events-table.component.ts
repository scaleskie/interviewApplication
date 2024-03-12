import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-events-table',
  templateUrl: './upcoming-events-table.component.html',
  styleUrl: './upcoming-events-table.component.scss'
})
export class UpcomingEventsTableComponent {

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'date', header: 'Date' },
  ];

  events = [
    {
      name: "Wedding",
      date: "11/23/2023"
    },
    {
      name: "Birthday Party",
      date: "12/23/2023"
    },
    {
      name: "Fundraiser",
      date: "12/25/2023"
    },];

}
