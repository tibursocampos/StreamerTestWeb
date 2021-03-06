import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class FormModelService {
  
  constructor() { }
  
  form: FormGroup = new FormGroup({
    id: new FormControl (null),
    name: new FormControl ('', Validators.required),
    image: new FormControl (''),
    why: new FormControl (''),
    what: new FormControl (''),
    whatWillWeDo: new FormControl (''),
    projectStatus: new FormControl ('0'),
    courseId: new FormControl ('', Validators.required)
  });
  
  formCreate: FormGroup = new FormGroup({
    name: new FormControl ('', Validators.required),
    image: new FormControl (''),
    why: new FormControl (''),
    what: new FormControl (''),
    whatWillWeDo: new FormControl (''),
    projectStatus: new FormControl ('0'),
    courseId: new FormControl ('')
  });
  
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      name: '',
      image: '',
      why: '',
      what: '',
      whatWillWeDo: '',
      projectStatus: '0',
      courseId: ''
    });
  }
  
  populateForm(project :Project) {
    this.form.setValue({
      id: project.id,
      name: project.name,
      image: project.image,
      why: project.why,
      what: project.what,
      whatWillWeDo: project.whatWillWeDo,
      projectStatus: project.projectStatus?.toString(),
      courseId: project.courseId
    });
  }
  
  populateFormCreate(project :Project) :Project {
    this.formCreate.setValue({
      name: project.name,
      image: project.image,
      why: project.why,
      what: project.what,
      whatWillWeDo: project.whatWillWeDo,
      projectStatus: project.projectStatus?.toString(),
      courseId: project.courseId
    });
    const newProject :Project = this.formCreate.value;
    return newProject;
  }
  
  
}
