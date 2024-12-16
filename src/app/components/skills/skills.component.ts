import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  languages = [
    "Python",
    "C#",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "C++",
    "Java",
    "SQL"
  ];
  frameworks = [
    "Node",
    "Express",
    "Angular",
    "React",
    "ASP.Net Core",
    "Entity Framework Core",
    "Bootstrap",
    "Git & Github",
    "WordPress",
    "Jupyter Notebook",
    "Swagger",
    "Postman",
    "Flask",
    "Django",
  ];
  databases = [
    "SQL Server",
    "Azure SQL",
    "AWS RDS",
    "MongoDB"
  ];
}
