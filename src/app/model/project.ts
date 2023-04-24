export class Project {
  url: string;
  name: string;
  description: string;
  techs: string[];
  constructor(url:string, name: string, description:string, techs: string[]) {
    this.url = url;
    this.name = name;
    this.description = description;
    this.techs = techs;
  }
}
