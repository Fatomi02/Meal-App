import { Component } from '@angular/core';

@Component({
  selector: 'body-component',
  styleUrls: ['body.scss'],
  template: `
    <div class="container">
      <div class="welcome-div">
        <div class="food-img">
          <img
            src="https://www.themealdb.com/images/meal-icon.png"
            alt="food"
          />
        </div>
        <div class="welcome">
          <h1>Welcome to TheMealDB</h1>
          <p>
            Welcome to TheMealDB: An open, crowd-sourced database of Recipes
            from around the world. <br />
            We also offer a <a href="">free JSON API</a> for anyone wanting to
            use it, with additional features for subscribers.
          </p>
          <button class="paypal-btn">
            <span class="pay">Pay</span><span class="pal">pal</span>
          </button>
          <p>
            Click button above to upgrade free API to premium for $3 <br />
            Currently 76 supporters
          </p>
        </div>
        <div class="food-img">
          <img
            src="https://www.themealdb.com/images/meal-icon.png"
            alt="food"
          />
        </div>
      </div>
      <hr />
      <div class="search">
        <input type="text" placeholder="Search for a Meal..." />
        <button class="search-icon">
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
        <div class="meal-count">
          <span>🥩Total Meals: 295</span>
          <span class="ingregients">🥫Total Ingredients: 574 </span>
          <span>🎞️Images: 295</span>
        </div>
      </div>
      <hr />
    </div>
  `,
})
export class BodyComponent {}
