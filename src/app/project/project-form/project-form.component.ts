import { Observable } from 'rxjs';
import { CourseService } from './../../services/course.service';
import { ProjectService } from './../../services/project.service';
import { ResponseService } from './../../services/response.service';
import { FormModelService } from './../../services/form-model.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  courseList !: Observable<Course[]>;
  value: number = 0;
  imgList: any[] = [];
  courseExist: boolean = false;
  course !: Course;
  formSelected: any;

  constructor(public service: FormModelService,
    private projectService: ProjectService,
    private courseService: CourseService,
    private response: ResponseService,
    public dialogRef: MatDialogRef<ProjectFormComponent>) { }

  ngOnInit(): void {
    this.courseList = this.courseService.getAll();
    this.loadListImage();
    this.getFormSelected();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  getFormSelected() {
    if (this.service.form) {
      this.formSelected = this.service.form.value;
    }
  }

  getProjects() {
    this.projectService.getAll().subscribe()
  }

  changeImage(value: string) {
    this.formSelected.image = value;
  }


  onSubmit() {
    if (this.service.form.valid) {
      const project: Project = this.service.form.value;
      project.courseId = Number(project.courseId);
      let newProject: Project = this.service.populateFormCreate(project);
      if (!this.service.form.get('id')?.value) {
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

  loadListImage() {
    this.imgList = [
      { id: 1, patch: "../../../assets/avatar/002-woman-14.png" },
      { id: 2, patch: "../../../assets/avatar/003-woman-13.png" },
      { id: 3, patch: "../../../assets/avatar/004-woman-12.png" },
      { id: 4, patch: "../../../assets/avatar/008-woman-8.png" },
      { id: 5, patch: "../../../assets/avatar/001-man-13.png" },
      { id: 6, patch: "../../../assets/avatar/014-man-12.png" },
      { id: 7, patch: "../../../assets/avatar/022-man-4.png" },
      { id: 8, patch: "../../../assets/avatar/023-man-3.png" },
    ];
  }


}
