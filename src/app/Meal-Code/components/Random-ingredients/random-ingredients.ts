import { Component } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
    selector: "random-ingredient",
    styleUrls: ["./random-ingredients.scss"],
    templateUrl: "random-ingredients.html"
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
