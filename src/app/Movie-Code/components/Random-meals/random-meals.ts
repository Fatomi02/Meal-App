import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'random-meals',
  styleUrls: ['./random-meals.scss'],
  template: `
    <div class="random-meal-container">
      <h4>Random Meal</h4>
      <div class="random-meal-div">
        <div class="item-div" *ngFor="let item of random.slice(6, 14)">
          <a href="">
            <img src="{{ item.strCategoryThumb }}" alt="" />
            {{ item.strCategory }}
          </a>
        </div>
      </div>
      <hr />
    </div>
  `,
})
export class RandomMeals {
  random: any;
  constructor(private user: UserService) {
    this.user.getData().subscribe((data: any) => {
      this.random = data.categories.sort(() => Math.random() - 0.5);
    });
  }
}
