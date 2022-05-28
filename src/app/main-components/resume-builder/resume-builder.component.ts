import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    twitter: "",
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
  generateResume!: boolean;

  constructor(private router: Router) { 
    this.showBasicDetails = true;
    this.showWorkDetails = false;
    this.showEducationDetails = false;
    this.showSkillsDetails = false;
    this.showCerificationDetails = false;
  }

  ngOnInit(): void {
  }

  basicDetailsChange(newBasicDetails: any) {
    this.basicDetails = newBasicDetails;
    this.showBasicDetails = false;
    this.showEducationDetails = true;
  }

  educationDetailsChange(newEducationDetails: any) {
    this.educationDetails[newEducationDetails.id -1] = newEducationDetails;
    this.showEducationDetails = false;
    this.showWorkDetails = true;
  }

  addEducationDetail() {
    this.educationDetails.push({
      id: this.educationDetails.length + 1,
      schoolName: "",
      schoolLocation: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      eduDescription: "",
    });
  }

  deleteEducationDetail() {
    if(this.educationDetails.length > 1) {
      this.educationDetails.pop();
    }
  }

  workDetailsChange(newWorkDetails: any) {
    this.workDetails[newWorkDetails.id -1] = newWorkDetails;
    this.showWorkDetails = false;
    this.showSkillsDetails = true;
    console.log(this.workDetails);
  }

  addWorkDetail() {
    this.workDetails.push({
      id: this.workDetails.length + 1,
      jobTitle: "",
      employer: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
    });
  }

  deleteWorkDetail() {
    if(this.workDetails.length > 1) {
      this.workDetails.pop();
    }
  }

  skillsDetailsChange(newSkillsDetails: any) {
    this.skillsDetails[newSkillsDetails.id -1] = newSkillsDetails;
    this.showSkillsDetails = false;
    this.showCerificationDetails = true;
  }

  addSkillsDetail() {
    this.skillsDetails.push({
      id: this.skillsDetails.length + 1,
      technology: "",
      project: "",
      demoLink: "",
      repoLink: "",
      additionalDetails: "",
    });
  }

  deleteSkillsDetail() {
    if(this.skillsDetails.length > 1) {
      this.skillsDetails.pop();
    }
  }

  certificationDetailsChange(newCertificationDetails: any) {
    this.certificationDetails[newCertificationDetails.id -1] = newCertificationDetails;
    this.showCerificationDetails = false;
    this.generateResume = true;
    // this.generateResume(this.basicDetails, this.workDetails, this.educationDetails, this.skillsDetails, this.certificationDetails);
  }

  addCertificationDetail() {
    this.certificationDetails.push({
      id: this.certificationDetails.length + 1,
      certificationName: "",
      certificationAuthority: "",
      certificationDate: "",
      certificationDescription: "",
    });
  }

  deleteCertificationDetail() {
    if(this.certificationDetails.length > 1) {
      this.certificationDetails.pop();
    }
  }


  // generateResume(basicDetails: any, workDetails: any, educationDetails: any, skillsDetails: any, certificationDetails: any) {
  //   console.log(basicDetails);
  //   console.log(workDetails);
  //   console.log(educationDetails);
  //   console.log(skillsDetails);
  //   console.log(certificationDetails);
  // }

  // logEv(){
  //   console.log(this.basicDetails);
    
  //   console.log(this.educationDetails);
  // }
}

