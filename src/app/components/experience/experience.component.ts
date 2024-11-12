import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit{

  jobs = new Array<Job>;

  ngOnInit(): void {
    /**
     * url: string;
     * company: string;
     * time: string;
     * position: string;
     * description: [string];
     */

    let bachelors = new Job(
      "https://uci.edu/",
      "University of California Irvine",
      "September 2013 - June 2017",
      "B.S IN ELECTRICAL ENGINEERING",
      [
        "Following my father's and his father's footsteps..."
      ]
    );
    let job1 = new Job(
      "https://www.hycorbiomedical.com/",
      "Hycor Biomedical",
      "July 2017 - June 2018",
      "Software Test Engineer",
      [
        "Executed meticulous test protocols and simulations for the allergy/autoimmune antibody testing software and associated instruments, ensuring the reliability and accuracy of critical medical diagnostics.",
        "Proficiently employed TESTTRACK software to efficiently track and document bugs and defects, facilitating the streamlined management of software quality.",
        "Expertly configured personal computers, integrating essential software and hardware components, to facilitate the smooth operation of allergy/autoimmune antibody testing software and instruments."
      ]
    );
    let job2 = new Job(
      "https://www.abbott.com/",
      "Abbott",
      "June 2018 - January 2019",
      "Electrical Engineer I",
      [
        "Diagnosed medical devices to discern and isolate firmware and software issues using data acquisition and measurement equipment, including oscilloscopes, digital multimeters (DMMs), and arbitrary waveform generators (AWGs).",
        "Employed data analysis techniques to create comprehensive Quality and R&D reports, contributing to the refinement and advancement of future product iterations.",
        "Developed and refined sequences and modules utilizing proprietary development tools, integral to the advancement and testing of implantable medical devices within the St. Jude Medical division."
      ]
    );
    let job3 = new Job(
      "https://www.abbott.com/",
      "Abbott",
      "June 2018 - January 2019",
      "Failure Analysis Engineer II",
      [
        "Conducted thorough and tailored examinations and troubleshooting on a variety of returned medical devices, utilizing specialized techniques to pinpoint underlying issues and customer complaints.",
        "Employed a range of in-house tools to assess device performance, images, interrogations, and longevity, contributing to the production of comprehensive analysis reports.",
        "Played a pivotal role in identifying root causes of device-related concerns, driving the enhancement of product reliability and overall quality."
      ]
    );
    let job4 = new Job(
      "https://www.appliedmedical.com/",
      "Applied Medical",
      "March 2019 - November 2020",
      "Process Engineer",
      [
        "Led cross-functional collaboration between R&D, Regulatory, and Quality teams to qualify a new laparoscopic device harness.",
        "Achieved a 90% cost reduction while increasing RF energy efficiency, boosting operational performance.",
      ]
    );
    let masters = new Job(
      "http://www.fullerton.edu/",
      "California State University Fullerton",
      "August 2020 - December 2022",
      "M.S IN COMPUTER SCIENCE",
      [
        "Career Switch!"
      ]
    );
    let job5 = new Job(
      "https://jantek.com/",
      "Jantek Electronics",
      "January 2023 - Present",
      "Software Engineer",
      [
        "Developed a responsive workforce management solution using Angular, optimizing UI for mobile and desktop.",
        "Created a Python-based MQTT subscriber application with Paho MQTT and tkinter, leveraging multi-threading for efficient real-time message processing and exporting data to Jantek time attendance software.",
        "Redesigned and integrated custom WordPress themes and plugins to enhance website functionality, SEO, performance, and user experience.",
        "Automated data pipelines with Python, improving scalability, speed, and exception handling."
      ]
    );
    this.jobs.push(job5, masters, job4, job3, job2, job1, bachelors);
  }

}
