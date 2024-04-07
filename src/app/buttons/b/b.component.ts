import { Component } from "@angular/core";
import { CommunicationService } from "../../communication.service";

@Component({
  templateUrl:'b.component.html',
  styleUrl:'b.component.scss'
})
export class BComponent{
  constructor(private commService:CommunicationService){}
  handleClick(text:string){
    this.commService.send('Last button clicked was: '+ text)
  }

}