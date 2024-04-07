import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayComponent } from './display.component';
import { CommunicationService } from '../communication.service';


@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
