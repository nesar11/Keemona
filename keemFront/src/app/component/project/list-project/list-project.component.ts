import { Component, OnInit } from '@angular/core';
import Project from '../../core/models/project';
import {ProjectService} from '../../../helper/project.service';
@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: Project[];
  constructor( private ps: ProjectService) { }
  deleteProject(id, index){
    this.ps.deleteProject(id).subscribe(res =>{
      this.projects.splice(index, 1);
    })
  }

  ngOnInit() {
    this.ps
            .getProject()
            .subscribe((data: Project[]) => {
              this.projects = data;
              console.log(this.projects);
             });
         }

}
