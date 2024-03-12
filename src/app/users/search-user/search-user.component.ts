import { Component } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
export class SearchUserComponent {

  enteredName = null;
  enteredNumber = null;
  enteredPhoneNumber = null;
  pipeString = "showing how a pipe works";
  pipeArray = ['Deputy', 'Ambulance', 'Badge', 'Car'];
}
