import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { ComponentModule } from './Movie-Code/movie-code.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
