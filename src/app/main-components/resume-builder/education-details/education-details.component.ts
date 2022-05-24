import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  @Input() educationDetails: any;
  @Input()
  educationDetailsLength!: number;

  @Output() educationDetailsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onEducationDetailChange(educationDetail: any) {
    this.educationDetailsChange.emit(educationDetail);
  }

  onEducationDetailsSubmit() {
    this.onEducationDetailChange(this.educationDetails);
    window.scrollTo(0, 0);
  }

}
