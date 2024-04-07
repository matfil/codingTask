import { Component } from "@angular/core";
import { CommunicationService } from "../../communication.service";

@Component({
  templateUrl:'c.component.html',
  styleUrl:'c.component.scss'
})
export class CComponent{
  constructor(private commService:CommunicationService){}
  handleClick(text:string){
    this.commService.send('Last button clicked was: '+ text)
  }
}