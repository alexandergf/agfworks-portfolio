import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';  

import { SideBarModule } from '../sidebar/sidebar.module';
import { TopbarComponent } from './topbar.component';

@NgModule({
    declarations: [
      TopbarComponent
    ],
    imports: [
      FontAwesomeModule,
      SideBarModule,
      AppRoutingModule,
      CommonModule
    ],
    exports: [TopbarComponent],
    providers: [],
    bootstrap: []
  })
  export class TopBarModule { }