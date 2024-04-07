import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {
  text:string = '';
  constructor(private communicationService: CommunicationService){
    this.communicationService.get().subscribe(message => this.text = message);
  }
}
