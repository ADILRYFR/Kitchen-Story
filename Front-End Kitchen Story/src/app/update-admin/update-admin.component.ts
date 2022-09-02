import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  msg:any="";
  username:any="";
  password:any="";
  add:any;
  constructor(    
    public as:AdminServiceService,

    ) { }

  ngOnInit(): void {
   this.username=sessionStorage.getItem("username");
   this.password=sessionStorage.getItem("password");
    this.add= new Admin(this.username,this.password);

  }
  


  Password = new FormGroup({
    password:new FormControl(),
    repeated_password:new FormControl()
  })

  

  proceed(){
    let pass = this.Password.value;
    if(pass.password!=pass.repeated_password){
      alert("The Passwords don't match");
    }else{
      this.as.updateAdmin(this.add,pass.password).subscribe(info=>this.msg=info,error=>console.log(error),()=>console.log("completed"));
    }
  }

}
