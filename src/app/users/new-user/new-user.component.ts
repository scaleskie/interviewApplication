import {Component, OnInit} from '@angular/core';
import {first, last} from "rxjs";
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent implements OnInit{

   firstName = null;
   lastName = null;
   showName = false;
  ngOnInit() {

  }

  submit(){
    this.showName = true;
    console.log(this.firstName + ' ' + this.lastName)
  }
}
