import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  @Input() workDetails: any;
  @Input()
  workDetailsLength!: number;

  @Output() workDetailsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onWorkDetailChange(workDetail: any) {
    this.workDetailsChange.emit(workDetail);
  }

  onWorkDetailsSubmit() {
    this.onWorkDetailChange(this.workDetails);
    window.scrollTo(0, 0);
  }

}
