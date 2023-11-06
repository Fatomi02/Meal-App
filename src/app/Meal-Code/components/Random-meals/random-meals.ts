import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'random-meals',
  styleUrls: ['./random-meals.scss'],
  templateUrl: "random-meals.html"
})
export class RandomMeals {
  random: any;
  constructor(private user: UserService, private router: Router) {
    this.user.getData().subscribe((data: any) => {
      this.random = data.categories.sort(() => Math.random() - 0.5);
    });
  }
  viewRandomMeal(item: any) {
    this.router.navigate(['random', item.idCategory], {state: {item}})
  }
}
