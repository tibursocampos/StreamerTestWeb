import { Course } from "./course.model";
import { ProjectStatus } from "./enum/project-status.enum";


export class Project {
   id ?:number;
   name ?:string;
   image ?:string;
   why ?:string;
   what ?:string;;
   whatWillWeDo ?:string;
   projectStatus ?:ProjectStatus;
   courseId ?:number;
   course ?:Course;    
}
