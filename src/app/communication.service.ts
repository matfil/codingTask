import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class CommunicationService{
  
  message:BehaviorSubject<string>;

  constructor(){
    console.log('comm service created');
    this.message = new BehaviorSubject('Button not clicked yet');
  }

  send(text: string){
    console.log(text);
    this.message.next(text);
  }

  get(): BehaviorSubject<string>{
    return this.message;
  }
}