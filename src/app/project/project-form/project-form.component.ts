import { ProjectComponent } from './../project.component';
import { CourseService } from './../../services/course.service';
import { ProjectService } from './../../services/project.service';
import { ResponseService } from './../../services/response.service';
import { FormModelService } from './../../services/form-model.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';
import { Course } from 'src/app/models/course.model';
import { ProjectStatus } from 'src/app/models/enum/project-status.enum';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  
  courseList :Course[] = [];
  value :number = 0;

  constructor(public service :FormModelService,
              private projectService :ProjectService,
              private courseService :CourseService,
              private response :ResponseService,
              public dialogRef :MatDialogRef<ProjectFormComponent>) { }

  ngOnInit(): void {
    this.getCourses();
  }
  
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  } 
  
  getCourses(){
    this.courseService.getAll().subscribe(
      data => {
        this.courseList = data;
      }
    )
  }
  
  inputDisabled(){
    if(!this.service.form.controls['id'].value){
    }
  }
  
  getProjects(){
    this.projectService.getAll().subscribe()
  }

  
  onSubmit(){
    if(this.service.form.valid){
      const project :Project = this.service.form.value;
      project.courseId = Number(project.courseId);
      let newProject :Project = this.service.populateFormCreate(project);
      if(!this.service.form.get('id')?.value){                                                                                                
        this.projectService.create(newProject).subscribe(
          data => {
           console.log(data);
          },
          error => console.error(error),
          () => {
            this.response.success(`Projeto criado com sucesso.`);
          }
        )
      }
      else {
        this.projectService.update(project).subscribe(
          data => {
            console.log(data);
          },
          error => console.error(error),
          () => {
            this.response.success(`Projeto atualizado com sucesso`);
          }
        )
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
      
    }
  }
}
