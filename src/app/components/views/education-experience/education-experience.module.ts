import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { EducationExperienceComponent } from './education-experience.component';
import { EducationExperienceRoutingModule } from './education-experience-routing.module';


@NgModule({
    declarations: [
      EducationExperienceComponent
    ],
    imports: [
      CommonModule,
      EducationExperienceRoutingModule
    ]
  })
  export class EducationExperienceModule { }