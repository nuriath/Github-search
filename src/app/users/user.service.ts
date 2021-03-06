import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User} from "../user";


@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

     user:User;
     

   constructor(private http:HttpClient) { 
       this.user=new User("","",0,0,0,"");
    }
    userRequest(userName){
       
      var userInput =userName;

      interface ApiResponse{
          name:string;
          following:number;
          followers:number;
          avatar_url:string;
          public_repos:number,
          html_url:string;
      }
      let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/' + userInput + "?access_token=609a93e18459dcbec9b2252344277d2f59ac61fd").toPromise().then(response=>{
            
            this.user.name=response.name,
            this.user.avatar_url=response.avatar_url,
            this.user.followers=response.followers,
            this.user.following=response.following,
            this.user.public_repos=response.public_repos,
            this.user.html_url=response.html_url,
            
  
            resolve();
        }, error=>{
          this.user.name="never give up!!!"
          this.user.following=0
          reject(error)
      }
  )
})
return promise


    }
}