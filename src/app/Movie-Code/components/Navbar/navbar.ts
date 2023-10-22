import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  styleUrls: ['./navbar.scss'],
  template: `
    <nav>
      <div class="container">
        <div class="logo">
          <img
            src="https://www.themealdb.com/images/logo-small.png"
            alt="Logo"
          />
        </div>
        <div>
          <i class="fa-solid fa-bars fa-2xl toggle" style="color: #ffffff;"></i>
        </div>
        <div class="nav-list">
          <ul>
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <div>
                <form action="">
                  <input type="text" placeholder="Search" />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class Navbar {}
