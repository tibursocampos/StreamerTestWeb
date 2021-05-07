import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Course } from './../models/course.model';
import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  public courses :Course[] = [];
  ELEMENG_DATA ?:Course[] = [];
  displayedColumns :string[] = ['name'];
  dataSource = new MatTableDataSource<Course>(this.ELEMENG_DATA);

  constructor(private route :Router,
              private courseService :CourseService
              ) { }

  ngOnInit(): void {
   // this.loadCourses();
   this.getCourses();
  }
  
  loadCourses(){
    this.courseService.getAll().subscribe(
      (query :Course[]) => {
        this.dataSource.data = query as Course[];
      },
       (message :any) => {
         console.error(message);
       });
  }
  
  getCourses(){
    this.courseService.getAll().subscribe(
      (query :Course[]) => {
        this.courses = query;
      },
       (message :any) => {
         console.error(message);
       });
  }
  
  listProjects(courseId :number){
    this.route.navigate(["projects-course/",courseId]);
  } 
  
}
