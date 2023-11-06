import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { ComponentPage } from "./container/components/components";
import { Navbar } from "./components/Navbar/navbar";
import { BodyComponent } from "./components/Body/body";
import { LatestMealComponent } from "./components/latest-meal/latest-meal.component";
import { PopularIngredient } from "./components/Popular-Ingredient/popular-ingredient";
import { RandomMeals } from "./components/Random-meals/random-meals";
import { RandomIngredient } from "./components/Random-ingredients/random-ingredients";
import { BrowseCountry } from "./components/browse-country/browse-country";
import { Footer } from "./components/footer/footer";


@NgModule ({
    declarations: [ComponentPage, Navbar, BodyComponent, LatestMealComponent, PopularIngredient, RandomMeals, RandomIngredient, BrowseCountry, Footer],
    imports: [CommonModule],
    exports: [ComponentPage, Navbar, Footer, BrowseCountry]
})

export class ComponentModule{}