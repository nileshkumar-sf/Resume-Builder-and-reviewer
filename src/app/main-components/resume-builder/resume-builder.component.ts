import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {

  basicDetails = {
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    country: "",
    pincode: "",
    phone: "",
    email: "",
    github: "",
    linkedin: "",
    twitter: ""
  }

  workDetails = [
    {
      id: 1,
      jobTitle: "",
      employer: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
    }
  ]

  educationDetails = [
    {
      id: 1,
      schoolName: "",
      schoolLocation: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      eduDescription: "",
    },
  ]

  skillsDetails= [
    {
      id: 1,
      technology: "",
      project: "",
      demoLink: "",
      repoLink: "",
      additionalDetails: "",
    }
  ]

  certificationDetails = [
    {
      id: 1,
      certificationName: "",
      certificationAuthority: "",
      certificationDate: "",
      certificationDescription: "",
    }
  ]

  showBasicDetails!: boolean;
  showWorkDetails!: boolean;
  showEducationDetails!: boolean;
  showSkillsDetails!: boolean;
  showCerificationDetails!: boolean;

  constructor() { 
    this.showBasicDetails = false;
    this.showWorkDetails = false;
    this.showEducationDetails = true;
    this.showSkillsDetails = false;
    this.showCerificationDetails = false;
  }

  ngOnInit(): void {
  }

  basicDetailsChange(newBasicDetails: any) {
    this.basicDetails = newBasicDetails;
    // this.showBasicDetails = false;
    // this.showEducationDetails = true;
  }

  educationDetailsChange(newEducationDetails: any) {
    this.educationDetails = newEducationDetails;
    // this.showEducationDetails = false;
    // this.showSkillsDetails = true;
  }
}
