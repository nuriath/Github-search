import { Component, OnInit } from '@angular/core';
import { User} from "../user";
import {HttpClient} from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { UserRequestService} from '../users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[UserRequestService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User;
  userName="";

  submitInput(){
    this.userService.userRequest(this.userName);
  }
  constructor
   (private userService:UserRequestService) { 
    

  }
  

  ngOnInit() {
    
    this.user=this.userService.user
    this.userService.userRequest("nuriath")
}
}
