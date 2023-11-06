import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";



@Component({
    selector: 'latest-route',
    styleUrls: ['latest-meal.scss'],
    templateUrl: 'latest-meal.html'
})

export class LatestMealRoute{
    meal: any;

    constructor(private router: Router) {

     this.meal = this.router.getCurrentNavigation()?.extras.state

 }


}