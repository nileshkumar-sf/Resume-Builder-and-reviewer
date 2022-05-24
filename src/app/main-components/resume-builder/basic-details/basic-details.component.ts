import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  @Input() basicDetails: any;

  @Output() basicDetailsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onBasicDetailsChange(basicDetails: any) {
    this.basicDetailsChange.emit(basicDetails);
  }

  onBasicDetailsSubmit() {
    if (this.basicDetails.firstName && this.basicDetails.lastName && this.basicDetails.city  && this.basicDetails.phone && this.basicDetails.email) {
      this.onBasicDetailsChange(this.basicDetails);
    }
    else {
      alert("Please fill all the required details");
    }
    window.scrollTo(0, 0);
  }

}
