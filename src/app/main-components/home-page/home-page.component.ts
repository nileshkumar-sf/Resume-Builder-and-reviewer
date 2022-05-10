import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  resumeReviewer() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/resume-reviewer']);
    }
    else {
      this.router.navigate(['/sign-in']);
    }
  }

  resumeBuilder() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/resume-builder']);
    }
    else {
      this.router.navigate(['/sign-in']);
    }
  }

}
