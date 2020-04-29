import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';

const directives = [
];
const modulesExport = [
  CommonModule,
  MaterialModule,
];
const componentsExport = [
  HeaderComponent
];

const pipes = [
];

@NgModule({
  declarations: [
    directives, 
    pipes, 
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [modulesExport, directives, componentsExport, pipes],
})
export class SharedModule { }
