import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async downloadResume(){
    const element = document.getElementById('resume')!;
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(this.basicDetails.firstName+  "_" +this.basicDetails.lastName +  "_" + "Resume.pdf");
  }

}
