import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./components/views/home/home.module').then(m => m.HomeModule)},
  {path: 'about', loadChildren: () => import('./components/views/about/about.module').then(m => m.AboutModule)},
  {path: 'educationAndExperience', loadChildren: () => import('./components/views/education-experience/education-experience.module').then(m => m.EducationExperienceModule)},
  {path: 'contact', loadChildren: () => import('./components/views/contact/contact.module').then(m => m.ContactModule)},
  {path: 'projects', loadChildren: () => import('./components/views/projects/projects.module').then(m => m.ProjectsModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
