import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  styleUrls: ['./navbar.scss'],
  templateUrl: "navbar.html"
})


export class Navbar {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
