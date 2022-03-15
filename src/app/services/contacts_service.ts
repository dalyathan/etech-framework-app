import { BehaviorSubject, Subject } from "rxjs";
import { Contact } from "../models/contacts";

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
      this.messageSource.next(this.contactList[this.contactList.length-1]);
    }
    }