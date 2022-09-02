import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
msg:String="";
  constructor(public fs:FoodServiceService,public router:Router) { }

  ngOnInit(): void {
    alert("You can add the Food Item now...");
  }

  Item = new FormGroup({
    name:new FormControl(),
    price:new FormControl()
  })

  add(){
    let item = this.Item.value;
      this.fs.addFood(item).subscribe(info=>this.msg=info,error=>console.log(error),()=>console.log("completed"));
  }
  goback(){
    this.router.navigate(["dashboard"]);
  }

}
