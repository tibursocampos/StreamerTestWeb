import { Project } from './../models/project.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  baseUrl = `${environment.mainUrl}/api/Project`;
  baseUrlCourse = `${environment.mainUrl}/api/Project/course`;

  constructor(private http :HttpClient) { }
  
  getAll() :Observable<Project[]>{
    return this.http.get<Project[]>(`${this.baseUrl}`);
  }
  
  getById(id :number) :Observable<Project>{
    return this.http.get<Project>(`${this.baseUrl}/${id}`);
  }
  
  getByCourse(id :number) :Observable<Project[]>{
    return this.http.get<Project[]>(`${this.baseUrlCourse}/${id}`);
  }
  
  create(project :Project) :Observable<Project>{
    return this.http.post<Project>(`${this.baseUrl}`, project);
  }
  
  update(project :Project) :Observable<Project>{
    return this.http.put<Project>(`${this.baseUrl}`,project);
  }
  
  delete(id :number) :Observable<Project>{
    return this.http.delete<Project>(`${this.baseUrl}/${id}`);
  }

}
