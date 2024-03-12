import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  visible: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Products',
        icon: 'pi pi-fw pi-file',
        command: () => this.openProducts(),
        items: []
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'New Order',
            icon: 'pi pi-fw pi-plus',
            command: () => this.openNewOrders()
          },
          {
            label: 'Edit Order',
            icon: 'pi pi-fw pi-pencil',
            command: () => this.openEditOrders()
          },
          {
            label: 'Cancel Order',
            icon: 'pi pi-fw pi-trash',
            command: () => this.openDeleteOrders()
          },
          {
            separator: true
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Upcoming Events',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Create',
                icon: 'pi pi-fw pi-calendar-plus',
                command: () => this.openUpcomingEventsCreate()
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
                command: () => this.openUpcomingEventsDelete()
              }
            ],
            command: () => this.openUpcomingEvents()
          },
          {
            label: 'Archived Events',
            icon: 'pi pi-fw pi-calendar-times',
            command: () => this.openArchivedEvents()
          }
        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            command: () => this.openNewUser()
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
            command: () => this.openDeleteUser()
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
          command: () => this.openSearchUser()
          }
        ]
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logOut()
      }
    ];
  }

  logOut() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  openProducts() {
    this.router.navigate(['/products']);
  }

  openDashboard() {
    this.router.navigate(['/dashboard']);
  }

  openNewOrders() {
    this.router.navigate(['/new-orders']);
  }

  openEditOrders() {
    this.router.navigate(['/edit-orders']);
  }

  openDeleteOrders() {
    this.router.navigate(['/delete-orders']);
  }

  openUpcomingEvents() {
    this.router.navigate(['/upcoming-events']);
  }

  openUpcomingEventsCreate() {
    this.router.navigate(['/upcoming-events/create']);
  }

  openUpcomingEventsDelete() {
    this.router.navigate(['/upcoming-events/delete']);
  }

  openArchivedEvents() {
    this.router.navigate(['/archived-events']);
  }

  openNewUser() {
    this.router.navigate(['/new-user']);
  }

  openDeleteUser() {
    this.router.navigate(['/delete-user']);
  }

  openSearchUser() {
    this.router.navigate(['/search-user']);
  }
}
