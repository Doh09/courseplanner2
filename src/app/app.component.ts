import { Component, OnInit } from '@angular/core';
import {Course} from "./course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to the course planner!';
  courses: Course[];

  ngOnInit() {
this.courses = [
  {
    academy: 'EASV',
    lecturer: 'Lars Bilde',
    title: 'Angular2',
    year: 2017,
    education: 'Computer Science'
  },
  {
    academy: 'EASV',
    lecturer: 'Stig Salskov Iversen',
    title: 'ITO',
    year: 2016,
    education: 'Computer Science'
  }
  ];
}
}
