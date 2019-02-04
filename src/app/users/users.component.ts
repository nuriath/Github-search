import { Component, OnInit } from '@angular/core';
import { User} from "../user";
import {Repository} from "../repository"


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User;
  repository:Repository;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
