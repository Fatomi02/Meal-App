import { Component } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
    selector: "random-ingredient",
    styleUrls: ["./random-ingredients.scss"],
    template: `
        <div class="random-ingredient-container">
            <h4>Random Ingredients</h4>
            <div class="random-ingredient-div">
                <div class="item-div" *ngFor="let item of redcurrants">
                    <a href="">
                        <img src="https://www.themealdb.com/images/ingredients/Redcurrants.png" alt="Redcurrants">
                        {{item.strIngredient}}
                    </a>
                </div>
                <div class="item-div" *ngFor="let item of custardPower">
                    <a href="">
                        <img src="https://www.themealdb.com/images/ingredients/Custard%20Powder.png" alt="Redcurrants">
                        {{item.strIngredient}}
                    </a>
                </div>
                <div class="item-div" *ngFor="let item of paellaRice">
                    <a href="">
                        <img src="https://www.themealdb.com/images/ingredients/Paella%20Rice.png" alt="Redcurrants">
                        {{item.strIngredient}}
                    </a>
                </div>
                <div class="item-div" *ngFor="let item of sake">
                    <a href="">
                        <img src="https://www.themealdb.com/images/ingredients/Sake.png" alt="Redcurrants">
                        {{item.strIngredient}}
                    </a>
                </div>
            </div>
            <hr>
        </div>
    `
})

export class RandomIngredient{
    redcurrants: any;
    custardPower: any;
    paellaRice: any;
    sake: any;
    constructor(private user: UserService) {
        this.user.getRandomIngredient().subscribe((data: any) => {
            this.redcurrants = data.meals.slice(431, 432)
        })

        this.user.getRandomIngredient().subscribe((data: any) => {
            this.custardPower = data.meals.slice(469, 470)
        })

        this.user.getRandomIngredient().subscribe((data: any) => {
            this.paellaRice = data.meals.slice(484, 485)
        })

        this.user.getRandomIngredient().subscribe((data: any) => {
            this.sake = data.meals.slice(257, 258)
        })
    }

    }
