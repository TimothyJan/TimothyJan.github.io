import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  languages = [
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL"
  ];
  frameworks = [
    "ASP.Net Core",
    "Node",
    "Express",
    "Angular",
    "React",
    "Ionic",
    "Django",
    "Django REST",
    "Flask"
  ];
  tools = [
    "Bash",
    "Git & Github",
    "MongoDB",
    "SQl Server",
    "Postman",
    "Insomnia"
  ];

}
