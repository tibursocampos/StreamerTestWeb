import { Course } from './../models/course.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  [x: string]: any;
  
  baseUrl = `${environment.mainUrl}/api/Course`;

  constructor( private http :HttpClient) { }
  
  getAll() :Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
  
  getById(id :number) :Observable<Course>{
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }
  
  
}
