import { Component, Injectable,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { DialogComponent, Contact } from '../dialog/dialog.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  logoPath='assets/images/logo.png'

  users:Contact[];
  constructor(public dialog: MatDialog, private service:ContactsService) {
    this.users= [];
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      height: '50%',
      data: {} as Contact
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.service.update(result as Contact);
    });
  }

  ngOnInit(): void {
    
  }

}
export class ContactsService {
  constructor(){}
  //Using any
  public contactList: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.contactList);
  currentMessage = this.messageSource.asObservable();
  update(newContact: Contact){
    this.contactList.push({position: this.contactList.length+1, name: newContact.name, number: newContact.number,address: newContact.address});
    console.log('updated');
    this.messageSource.next(this.contactList);
  }
  }
