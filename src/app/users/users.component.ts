import { Component, OnInit } from '@angular/core';
import { User} from "../user";
import {Repository} from "../repository";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User;
  repository:Repository;

  constructor
   (private http:HttpClient) { 
    
  }

  ngOnInit() {

    interface ApiRespose{
      name:string;
      following:number;
      followers:number;
      avatar_url:string;
      

    }

    this.http.get("https://api.github.com/users/daneden").subscribe(data=>{
      this.user=new User(data.name,data.following,data.followers,data.avatar_url)
      this.repository=new Repository(data.url, data.repo_url)
    
    })
   
  }
}
  


