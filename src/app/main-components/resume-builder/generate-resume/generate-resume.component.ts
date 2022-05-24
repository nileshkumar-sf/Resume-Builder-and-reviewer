import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-resume',
  templateUrl: './generate-resume.component.html',
  styleUrls: ['./generate-resume.component.css']
})
export class GenerateResumeComponent implements OnInit {

  @Input() basicDetails: any;

  @Input() workDetails: any;

  @Input() educationDetails: any;

  @Input() skillsDetails: any;

  @Input() certificationsDetails: any;

  constructor() { }

  ngOnInit(): void {
    console.log("Basic Details",this.basicDetails);
    console.log("Work Details",this.workDetails);
    console.log("Education details",this.educationDetails);
    console.log("skills details",this.skillsDetails);
    console.log("certification details",this.certificationsDetails);
  }

}
