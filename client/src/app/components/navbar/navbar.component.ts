import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loggedIn(): boolean {
    return sessionStorage.getItem('token') && sessionStorage.getItem('token').length !== 0;
  }

}
