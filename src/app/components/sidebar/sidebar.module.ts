import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../../app-routing.module';

import { SidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
      SidebarComponent
    ],
    imports: [
      FontAwesomeModule,
      AppRoutingModule,
      CommonModule
    ],
    exports: [SidebarComponent],
    providers: [],
    bootstrap: []
  })
  export class SideBarModule { }