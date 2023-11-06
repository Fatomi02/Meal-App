import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";



@Component({
    selector: 'latest-route',
    styleUrls: ['random-meal.route.scss'],
    templateUrl: 'random-meal.route.html'
})

export class RandomMealRoute {
    item: any;

    constructor(private router: Router) {

     this.item = this.router.getCurrentNavigation()?.extras.state

    //  console.log(this.random)

 }


}