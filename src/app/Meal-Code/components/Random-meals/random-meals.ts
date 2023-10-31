import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'random-meals',
  styleUrls: ['./random-meals.scss'],
  templateUrl: "random-meals.html"
})
export class RandomMeals {
  random: any;
  constructor(private user: UserService) {
    this.user.getData().subscribe((data: any) => {
      this.random = data.categories.sort(() => Math.random() - 0.5);
    });
  }
}
