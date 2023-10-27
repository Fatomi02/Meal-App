import { Component } from "@angular/core";
import { take } from "rxjs";
import { UserService } from "src/app/user.service";

@Component({
    selector: "latest-meal",
    styleUrls: ["./latest-meal.component.scss"],
    template: `
        <div class="meal-container">
            <h4>Latest Meals</h4>

            <div  class="meal-div-container">
                <div class="meal-div" *ngFor="let item of categories">
                    <a href="">
                    <img src="{{item.strCategoryThumb}}" alt="">
                    {{item.strCategory}}
                    </a>
                </div>
        </div>

        <hr>
    `
})


export class LatestMealComponent{
    categories: any;
    constructor(private user: UserService) {
        this.user.getData()
        .subscribe((data: any) => {
         this.categories = data.categories.slice(0, 8);
        })
    }
    
  
}