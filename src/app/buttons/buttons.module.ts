import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DynamicRouteService } from '../dynamic-route.service';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    ButtonsComponent,
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  providers:[
    DynamicRouteService
  ]
})
export class ButtonsModule {

  additionalRoutes: Routes=[{ path: '', children:[{path:'c',component:CComponent}]}];

  constructor(private dynamicRouteService:DynamicRouteService){
    this.dynamicRouteService.addRoutes(this.additionalRoutes)
  }
 }
