import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileUpload } from 'src/app/shared/services/file-upload';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';

@Component({
  selector: 'app-resume-reviewer',
  templateUrl: './resume-reviewer.component.html',
  styleUrls: ['./resume-reviewer.component.css']
})
export class ResumeReviewerComponent implements OnInit {

  submitted!: boolean;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  constructor(private uploadService: FileUploadService) { }
  ngOnInit(): void {
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  onSubmit(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          (percentage) => {
            this.percentage = Math.round(percentage ? percentage : 0);

            if (this.percentage === 100) {
              this.submitted = true;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}
