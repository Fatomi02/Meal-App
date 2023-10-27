import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';

import { ComponentPage } from "./container/components/components";
import { Navbar } from "./components/Navbar/navbar";
import { BodyComponent } from "./components/Body/body";
import { LatestMealComponent } from "./components/latest-meal/latest-meal.component";

@NgModule ({
    declarations: [ComponentPage, Navbar, BodyComponent, LatestMealComponent],
    imports: [CommonModule, HttpClientModule, NgxPaginationModule],
    exports: [ComponentPage]
})

export class ComponentModule{}