import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(public router:Router, public as:AdminServiceService) { }
  msg:string="";
  ngOnInit(): void {
  }

  AdminRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
  })

  checkAdmin(){
    let login=this.AdminRef.value;
    this.as.CheckAdmin(login).subscribe(result=>this.msg=result,error=>console.log(error),()=>{
      if(this.msg=="Proceed shit"){
        this.router.navigate(["dashboard"]);
        sessionStorage.setItem("username",login.username);
        sessionStorage.setItem("password",login.password);
   
       }
    });

    
    
    
    }
  }