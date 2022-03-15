import { Component, Injectable,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { Contact } from 'src/app/models/contacts';
import { ContactsService } from 'src/app/services/contacts_service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  styles: [`
    ::ng-deep .specific-class > .mat-expansion-indicator:after {
      border-color: white;
    }
  `],
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
