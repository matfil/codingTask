import { Component } from "@angular/core";
import { CommunicationService } from "../../communication.service";

@Component({
  templateUrl:'a.component.html',
  styleUrl:'a.component.scss'
})
export class AComponent{
  constructor(private commService:CommunicationService){}
  handleClick(text:string){
    console.log('a click');
    this.commService.send('Last button clicked was: '+ text)
  }
}