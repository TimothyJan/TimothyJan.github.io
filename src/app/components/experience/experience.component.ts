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
        "Following my father and his father footsteps..."
      ]
    );
    let job1 = new Job(
      "https://www.hycorbiomedical.com/",
      "Hycor Biomedical",
      "July 2017 - June 2018",
      "Software Test Engineer",
      [
        "Conducted test protocols and simulations for the allergy/autoimmune antibody testing software and instruments.",
        "Utilized TESTTRACK software for bug/defect tracking and documentation.",
        "Configured PCs with necessary software and hardware to operate allergy/autoimmune antibody testing software/instruments."
      ]
    );
    let job2 = new Job(
      "https://www.abbott.com/",
      "Abbott",
      "June 2018 - January 2019",
      "Electrical Engineer I",
      [
        "Executed and modified sequences/modules using in-house development tools for developing and testing implantable medical devices in St. Jude Medical.",
        "Troubleshot medical devices to identify and isolate firmware/software issues using data acquisition/measurement devices.",
        "Analyzed data to generate Quality and R&D reports for future product improvement."
      ]
    );
    let job3 = new Job(
      "https://www.abbott.com/",
      "Abbott",
      "June 2018 - January 2019",
      "Failure Analysis Engineer II",
      [
        "Implemented different in-depth examinations/troubleshooting for returned medical devices with issues to identify the root cause.",
        "Evaluated device performances, images, interrogations, and longevity using in-house tools to produce analysis reports."
      ]
    );
    let job4 = new Job(
      "https://www.appliedmedical.com/",
      "Applied Medical",
      "March 2019 - November 2020",
      "Process Engineer",
      [
        "Modified Python scripts and excel sheets that resulted in analysis and data collection to be faster, scalable and have better exception handling.",
        "Qualified a new harness for laparoscopic devices through collaboration with multiple teams that reduced costs by 90% and improved RF energy efficiency.",
        "Reduced costs, enhanced overall efficiency and customer ease of use by becoming the main point of contact between R&D teams, harness vendors and clinical team."
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
        "Built a workforce management solution for a time keeping company.",
        "Revamped the frontend UI to use the latest frontend UX/UI designs using Angular and Ionic.",
        "•	Configured MQTT broker/server with Mosquitto to send commands and receive events/messages from devices and automated data pipelining with Python scripting."
      ]
    );
    this.jobs.push(job5, masters, job4, job3, job2, job1, bachelors);
  }

}
