import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {UsersComponent} from "./users/users.component";


import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
