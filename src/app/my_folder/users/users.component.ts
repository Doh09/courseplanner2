import { Component, OnInit } from '@angular/core';
import {Smurf} from "../smurf";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  smurfs: Smurf[];

  constructor() {

  }

  ngOnInit() {
    this.smurfs = [
      {
        age: 6436,
        name: "HHUUUUUUEHEUHEUEHEU"
      },
      {
        age: 3556,
        name: "Fakayoowhale"
      }
    ];
  }

  add(userName: string, userAge: number){
    var smurfToAdd = new Smurf();
    smurfToAdd.age = userAge;
    smurfToAdd.name = userName;
    this.smurfs.push(smurfToAdd);
  }
}
