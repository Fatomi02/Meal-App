import { Component } from '@angular/core';


@Component({
    selector: "components",
    styleUrls: ["./components.scss"],
    template: `
    <div>
        <navbar></navbar>
        <body-component></body-component>
        <latest-meal></latest-meal>
    </div>
    `
})

export class ComponentPage{}