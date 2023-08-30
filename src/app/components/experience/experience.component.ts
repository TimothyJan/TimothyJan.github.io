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
        "Revamped Python scripts and excel sheets that resulted in analysis and data collection to be faster, scalable and have better exception handling.",
        "Took on a pivotal role in a cross-functional collaboration effort involving R&D, Regulatory Analysis, Quality, and more, to successfully qualify a new harness for laparoscopic devices.",
        "Achieved a remarkable 90% reduction in costs while simultaneously enhancing RF energy efficiency, contributing significantly to the company's financial and operational success."
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
      "",
      "HelloWorld Consulting LLC",
      "January 2023 - Present",
      "Software Engineer",
      [
        "Developed a workforce management solution for a time and attendance keeping company.",
        "Designed and implemented a robust minimal API using ASP.Net Core Web API, SQL Server, and Swagger for seamless data interaction.",
        "Revamped the frontend UI to align with latest UX/UI designs, utilizing Angular and Ionic frameworks.",
        "Configured MQTT broker/server with Mosquitto to facilitate communication with devices, enabling command transmission and event handling.",
        "Automated data pipelining through Python scripting, optimizing data flow efficiency.",

      ]
    );
    this.jobs.push(job5, masters, job4, job3, job2, job1, bachelors);
  }

}
