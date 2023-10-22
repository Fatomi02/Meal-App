import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentPage } from "./container/components/components";
import { Navbar } from "./components/Navbar/navbar";

@NgModule ({
    declarations: [ComponentPage, Navbar],
    imports: [CommonModule],
    exports: [ComponentPage]
})

export class ComponentModule{}