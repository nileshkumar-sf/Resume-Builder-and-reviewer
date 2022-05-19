import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  @Input() educationDetails: any;

  @Output() educationDetailsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onEducationDetailsChange(educationDetails: any) {
    this.educationDetailsChange.emit(educationDetails);
  }

  onSubmit() {
    this.onEducationDetailsChange(this.educationDetails);
  }

}
