import { Component } from '@angular/core';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'popular-ingredient',
  styleUrls: ['./popular-ingredient.scss'],
  template: `
    <div class="popular-container">
      <h4>Popular Ingredients</h4>
      <div class="popular-div">
        <div class="popular-items" *ngFor="let ingredient of chicken">
          <a href="">
            <img
              src="https://www.themealdb.com/images/ingredients/Chicken.png"
              alt=""
            />
            {{ ingredient.strIngredient }}
          </a>
        </div>
        <div class="popular-items" *ngFor="let ingredient of salmon">
          <a href="">
            <img
              src="https://www.themealdb.com/images/ingredients/Salmon.png"
              alt=""
            />
            {{ ingredient.strIngredient }}
          </a>
        </div>
        <div class="popular-items" *ngFor="let ingredient of beef">
          <a href="">
            <img
              src="https://www.themealdb.com/images/ingredients/Beef.png"
              alt=""
            />
            {{ ingredient.strIngredient }}
          </a>
        </div>
        <div class="popular-items" *ngFor="let ingredient of pork">
          <a href="">
            <img
              src="https://www.themealdb.com/images/ingredients/Pork.png"
              alt=""
            />
            {{ ingredient.strIngredient }}
          </a>
        </div>
      </div>
      <hr />
    </div>
  `,
})
export class PopularIngredient {
  chicken: any;
  salmon: any;
  beef: any;
  pork: any;
  constructor(private user: UserService) {
    this.user.getPopularIngredient().subscribe((data: any) => {
      this.chicken = data.meals.slice(0, 1);
    });

    this.user.getPopularIngredient().subscribe((data: any) => {
      this.salmon = data.meals.slice(1, 2);
    });

    this.user.getPopularIngredient().subscribe((data: any) => {
      this.beef = data.meals.slice(2, 3);
    });

    this.user.getPopularIngredient().subscribe((data: any) => {
      this.pork = data.meals.slice(3, 4);
    });
  }
}
