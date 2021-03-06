import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SafePipe } from './pipes/safe.pipe';

const directives = [
];
const modulesExport = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
];
const componentsExport = [
  HeaderComponent
];

const pipes = [
  SafePipe
];

@NgModule({
  declarations: [
    directives,
    pipes,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule
  ],
  exports: [modulesExport, directives, componentsExport, pipes],
})
export class SharedModule { }
