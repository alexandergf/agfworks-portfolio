import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationExperienceComponent } from './education-experience.component';

const routes: Routes = [
  {
    path: '',
    component: EducationExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationExperienceRoutingModule { }