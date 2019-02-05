import { Component, OnInit } from '@angular/core';
import { User} from "../user";
import {Repository} from "../repository";
import {HttpClient} from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User;
  // repository:Repository;

  constructor
   (private http:HttpClient) { 
    
  }


  ngOnInit() {

    interface ApiRespose{
      name:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repos:number;
      html_url:string;

    }

   
    this.http.get("https://api.github.com/users/daneden").subscribe(data=>{
      this.user=new User(data.name, data.avatar_url, data.followers, data.following,  data.public_repos,data.html_url)
      // this.repository=new Repository(data.url, data.repo_url)
    
    })
   
  }
  Search(){
    // if (this.user != "")
      // else if (this.user == ""){
      //   this.ngOnInit();
      // }
    
    this.user=this.user; res=>{
      return res.newUser()
    }
  }
}

