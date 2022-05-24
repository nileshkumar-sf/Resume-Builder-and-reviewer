import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-certification-details',
  templateUrl: './certification-details.component.html',
  styleUrls: ['./certification-details.component.css']
})
export class CertificationDetailsComponent implements OnInit {

  @Input() certificationsDetails: any;
  @Input()
  certificationsDetailsLength!: number;

  @Output() certificationsDetailsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onCertificationsDetailChange(certificationsDetail: any) {
    this.certificationsDetailsChange.emit(certificationsDetail);
  }

  onCertificationsDetailsSubmit() {
    this.onCertificationsDetailChange(this.certificationsDetails);
    window.scrollTo(0, 0);
  }


}
