import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupBuyingComponent } from './group-buying.component';

const routes: Routes = [
  {
    path: '',
    component: GroupBuyingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupBuyingRoutingModule { }
