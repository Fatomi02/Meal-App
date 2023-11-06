import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { ComponentPage } from "./Meal-Code/container/components/components";

import { ApiComponent } from "./Meal-Code/components/Api-route/api.route";
import { LatestMealRoute } from "./Meal-Code/components/latest-meal.route/latest-meal";

import { RandomMealRoute } from "./Meal-Code/components/random-meal-route/random-meal.route";


const routes: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: ComponentPage},
    
    { path: 'api', component: ApiComponent },

    { path: 'meal/:idCategory', component: LatestMealRoute},

    { path: 'random/:idCategory', component: RandomMealRoute}

  
 ]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}
)

export class AppRoutingModule { }

