import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupBuyingRoutingModule } from './group-buying-routing.module';
import { GroupBuyingComponent } from './group-buying.component';


@NgModule({
  declarations: [GroupBuyingComponent],
  imports: [
    CommonModule,
    GroupBuyingRoutingModule
  ]
})
export class GroupBuyingModule { }
