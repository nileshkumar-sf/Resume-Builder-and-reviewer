import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skills-details',
  templateUrl: './skills-details.component.html',
  styleUrls: ['./skills-details.component.css']
})
export class SkillsDetailsComponent implements OnInit {

  @Input() skillsDetails: any;
  @Input()
  skillsDetailsLength!: number;

  @Output() skillsDetailsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSkillsDetailChange(skillsDetail: any) {
    this.skillsDetailsChange.emit(skillsDetail);
  }

  onSkillsDetailsSubmit() {
    this.onSkillsDetailChange(this.skillsDetails);
    window.scrollTo(0, 0);
  }


}
