import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/core/interfaces/project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) { }
  

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
