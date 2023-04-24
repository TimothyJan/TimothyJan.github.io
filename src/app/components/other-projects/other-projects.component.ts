import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss']
})
export class OtherProjectsComponent implements OnInit{
  projects = new Array<Project>;

  ngOnInit(): void {
    /**
     * url: string;
     * name: string;
     * description: string;
     * techs: string[];
     */
    let project1 = new Project(
      "https://github.com/TimothyJan/C-based-Language-Compiler",
      "C Based Language Compiler",
      "Created Lexical Analyzer and Syntax Analyzer components of a compiler for a made-up C based language.",
      [
        "C++",
      ]
    );
    let project2 = new Project(
      "https://github.com/TimothyJan/Handwritten-Alphabet-Recognition-CNN",
      "Handwritten Alphabet Recognition CNN",
      "We recognize handwritten characters(English alphabets) from A-Z by modeling a Convolutional Neural Network that will be trained over a dataset containing images of alphabets.",
      [
        "Python",
        "Tensorflow",
        "Pandas",
        "Numpy",
        "Jupyter Notebook"
      ]
    );
    let project3 = new Project(
      "https://github.com/TimothyJan/RNN_Text_Generation",
      "RNN Text Generation",
      "We generate text using a character-based RNN. Our dataset is the text corpora for the elder scrolls game and some others games as well.",
      [
        "Python",
        "Tensorflow",
        "Numpy",
        "Jupyter Notebook"
      ]
    );
    let project4 = new Project(
      "https://github.com/TimothyJan/Autoencoder-Movie-Recommender",
      "Movie Recommender",
      "We apply autoencoders to the task of making movie recommendations.",
      [
        "Python",
        "Tensorflow",
        "Pandas",
        "Numpy",
        "Jupyter Notebook"
      ]
    );
    let project5 = new Project(
      "https://github.com/TimothyJan/Workout-Tracker-Web-App",
      "Workout Tracker",
      "CRUD workout days with Strength and Cardio training sets.",
      [
        "C#",
        "ASP.NET Core MVC",
        "Entity Framework Core",
        "SQL Server",
        "Visual Studio 2022",
      ]
    );
    let project6 = new Project(
      "https://github.com/TimothyJan/MERN-Movie-Reviewer",
      "Movie Reviewer",
      "Full stack web app using the MERN stack (MongoDB, Express, React, and Node.js) to CRUD (Create, Read, Update and Delete) movie reviews and ratings.",
      [
        "JavaScript",
        "HTML",
        "CSS",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ]
    );
    let project7 = new Project(
      "https://github.com/TimothyJan/Flight-Price-Prediction-Flask",
      "Flight Price Prediction",
      "Flight Price Prediction Flask App using numpy, seaborn, pandas and sklearn.",
      [
        "Python",
        "Numpy",
        "Seaborn",
        "Pandas",
        "SKLearn",
        "Jupyter Notebook"
      ]
    );
    let project8 = new Project(
      "https://github.com/TimothyJan/Movie-Reviewer-SpringBoot-React",
      "Movie Reviewer",
      "Full stack web app using Mongodb for database, Java and Spring Boot for the backend, and React for the frontend. CRUD (Create, Read, Update and Delete) movie reviews and ratings.",
      [
        "Java",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
        "SpringBoot"
      ]
    );
    this.projects.push(
      project8,
      project7,
      project6,
      project5,
      project4,
      project3,
      project2,
      project1);
  }

}
