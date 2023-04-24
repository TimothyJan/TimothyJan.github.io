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
  ];
  frameworks = [
    "Node",
    "Express",
    "Angular",
    "React",
    "Django",
    "Django REST",
    "Flask"
  ];
  tools = [
    "Bash",
    "Git & Github",
    "MongoDB",
    "Postman",
    "Insomnia"
  ];

}
