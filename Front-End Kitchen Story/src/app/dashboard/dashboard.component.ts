import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:string="";
  constructor(public router:Router, public app:AppComponent) {
    router.url;
   }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("username");
    if(obj!=null){
    this.username=obj;
    }
  }

   logout(){
    this.router.navigate(["AdminLogin"]);
    sessionStorage.removeItem("username");
   }

   transmit(){
    this.router.navigate(["buyfood"]);
    sessionStorage.setItem("user",this.username);
    
   }

   addfood(){
    this.router.navigate(["addfood"]);
   }

   updatePassword(){
    this.router.navigate(["updateAdmin"]);
   }

}
