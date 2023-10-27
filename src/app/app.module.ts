import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http"
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ComponentModule } from './Movie-Code/movie-code.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, ComponentModule, HttpClientModule, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
