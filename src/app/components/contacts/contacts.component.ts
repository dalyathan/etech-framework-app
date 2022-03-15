import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts_service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any[];
  displayedColumns = ['position','name', 'number', 'address'];
  searchString='';

  constructor(private service: ContactsService) { 
    this.contacts=[];
  }

  ngOnInit() {
    this.service.currentMessage.subscribe(
      message =>{
        var newArray=[...this.contacts,message];
        this.contacts=newArray;
      }
      );
   }

}
