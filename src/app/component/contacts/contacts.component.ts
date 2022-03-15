import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../drawer/drawer.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any[];
  displayedColumns: string[] = ['position','name', 'number', 'address'];
  searchString='';
  // filteredContacts=this.searchString!=''?contacts.map;

  constructor(private service: ContactsService) { 
    this.contacts=[];
  }

  ngOnInit() {
    this.service.currentMessage.subscribe(
      message =>{
        this.contacts= [];
        this.contacts=[...message];
      }
      );
   }

}
