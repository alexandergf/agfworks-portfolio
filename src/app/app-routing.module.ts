import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/views/about/about.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { EducationExperienceComponent } from './components/views/education-experience/education-experience.component';
import { ProjectsComponent } from './components/views/projects/projects.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'educationAndExperience', component: EducationExperienceComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
