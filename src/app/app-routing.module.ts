import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) }, { path: 'display', loadChildren: () => import('./display/display.module').then(m => m.DisplayModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
