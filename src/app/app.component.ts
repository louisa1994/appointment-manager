import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
export class myFormItems {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  dateAndTime: string;
  whoToSee: string;
  purpose: string;
  firstTimeVisit: boolean;
  agreed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
  }
  yesterday: Date;
  datePipe: DatePipe;
  formItem: myFormItems;
  formItems: myFormItems[];
  title = 'appointment-manager';
  purposes = [
    "Long Vist",
    "Short Visit",
    "Official",
    "Casual"
  ];
  addVisit() {
    this.formItems.push(this.formItem);
    alert("VIsit logged successfuly!");
  }
}
