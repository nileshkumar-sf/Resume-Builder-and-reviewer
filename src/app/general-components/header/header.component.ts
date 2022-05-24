import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  asset(path: string) {
    return `assets/${path}`;
  }

  url(path: string) {
    return `/${path}`;
  }

  profile() {
    this.router.navigate(['/dashboard']);
  }

}
