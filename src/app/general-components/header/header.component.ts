import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  asset(path: string) {
    return `assets/${path}`;
  }

  url(path: string) {
    return `/${path}`;
  }

}
