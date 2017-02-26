import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {User} from "./user";

@Component({
  selector: 'course-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  title = 'Welcome to the course planner!';
  courses: Course[];
  users: User[];

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
    this.users = [
      {name: "Alex", email: "alex@gmail.com", password: "AlexPW"},
      {name: "Martin", email: "martin@gmail.com", password: "MartinPW"},
      {name: "Simon", email: "Simon@gmail.com", password: "SimonPW"}
    ];
  }
}
