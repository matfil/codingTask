import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

const routes: Routes = [
  { path: '', children:[
    {path:'a',component:AComponent},
    {path:'b',component:BComponent}
  ]},
  { path: '', children:[
    {path:'c',component:CComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
