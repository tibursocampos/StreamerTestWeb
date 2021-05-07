import { Pipe, PipeTransform } from '@angular/core';
import { ProjectStatus } from '../models/enum/project-status.enum';

@Pipe({
  name: 'projectStatus'
})
export class ProjectStatusPipe implements PipeTransform {
  
  public projectStatusList = ProjectStatus;
  public projecStatusArray :string[] = [];

  transform(value: ProjectStatus, args: any[]) {
    if(value === undefined || args === undefined){
      return null;
    }
    
    for(let index = 0; index < 2; index++){
      this.projecStatusArray.push(this.projectStatusList[index]);
    }
    
    return this.projecStatusArray[value];
    
  }

}
