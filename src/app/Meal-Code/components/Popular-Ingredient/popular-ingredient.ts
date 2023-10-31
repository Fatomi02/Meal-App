import { Component } from '@angular/core';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'popular-ingredient',
  styleUrls: ['./popular-ingredient.scss'],
  templateUrl: "popular-ingredient.html"
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
