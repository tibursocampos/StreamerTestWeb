import { ProjectFormComponent } from './project/project-form/project-form.component';
import { CourseComponent } from './course/course.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full'},
  { path: 'projects', component: ProjectComponent },
  { path: 'projects-edit/:projectId', component: ProjectFormComponent },
  { path: 'courses', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
