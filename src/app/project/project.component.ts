import { CourseService } from './../services/course.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormModelService } from './../services/form-model.service';
import "@angular/compiler";
import { ResponseService } from './../services/response.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectService } from './../services/project.service';
import { Project } from './../models/project.model';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  
  courseList :Course[] = [];
  ELEMENG_DATA :Project[] = [];
  displayedColumns :string[] = ['name', 'image', 'why', 'what', 'whatWillWeDo', 'projectStatus', 'course', 'actions'];
  dataSource = new MatTableDataSource<Project>(this.ELEMENG_DATA);
  searchKey!: string;
  courseId :number = 0;
  
  constructor(private projectService :ProjectService,
              private courseService :CourseService,
              private service :FormModelService,
              private dialog :MatDialog,
              private responseService :ResponseService,
              private router :Router,
              private route :ActivatedRoute) { }

  ngOnInit(): void {   
    this.loadProjects();     
    this.loadCourses(); 
  }
  
  loadProjects(){
    this.projectService.getAll().subscribe(
      (query :Project[]) => {
        this.dataSource.data = query as Project[];
      },
       (message :any) => {
         console.error(message);
       });
  }
  
  loadCourses(){
    this.courseService.getAll().subscribe(
      data => {
        this.courseList = data;
      }
    )
  }
  
  onGetByCourse(id :number){
    this.projectService.getByCourse(id).subscribe(
      (query :Project[]) => {
        this.dataSource.data = query as Project[];
      },
       (message :any) => {
         console.error(message);
       });
  }
  
  verifyCourseId(id :number){
    if(id == 0){
      return
    }
    this.onGetByCourse(id)
  }
  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  
  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(ProjectFormComponent,dialogConfig);
  }
  
  onEdit(project :Project){
    this.service.populateForm(project);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(ProjectFormComponent,dialogConfig);
  }
    
  onDelete(id :number){
    if(confirm('Tem certeza que deseja apagar este projeto ?')){
      this.projectService.delete(id).subscribe(
        data => {
          console.log(data);
        },
        error => this.responseService.warn(error),
        () => {
          this.responseService.warn('Projeto excluído');
          this.loadProjects();
        }
      )
    }
  } 
    
}
