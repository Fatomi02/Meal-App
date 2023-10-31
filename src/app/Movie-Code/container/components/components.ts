import { Component } from '@angular/core';


@Component({
    selector: "components",
    styleUrls: ["./components.scss"],
    template: `
    <div>
        <navbar></navbar>
        <body-component></body-component>
        <latest-meal></latest-meal>
        <popular-ingredient></popular-ingredient>
        <random-meals></random-meals>
        <random-ingredient></random-ingredient>
        <browse-country></browse-country>
        <footer></footer>
    </div>
    `
})

export class ComponentPage{}