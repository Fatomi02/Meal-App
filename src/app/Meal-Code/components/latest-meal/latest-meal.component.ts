import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'latest-meal',
  styleUrls: ['./latest-meal.component.scss'],
  templateUrl: "latest-meal.html"
})

export class LatestMealComponent {
  categories: any;
  constructor(private user: UserService, private router: Router) {
    this.user.getData().subscribe((data: any) => {
      this.categories = data.categories?.slice(0, 8);
    });
  }

  viewMeal(meal: any) {
      this.router.navigate(['meal', meal.idCategory], {state: {meal}})
  }
}
