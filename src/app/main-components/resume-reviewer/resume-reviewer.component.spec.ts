import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeReviewerComponent } from './resume-reviewer.component';

describe('ResumeReviewerComponent', () => {
  let component: ResumeReviewerComponent;
  let fixture: ComponentFixture<ResumeReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeReviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
