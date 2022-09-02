import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';


@Component({
  selector: 'app-buy-food',
  templateUrl: './buy-food.component.html',
  styleUrls: ['./buy-food.component.css']
})
export class BuyFoodComponent implements OnInit {
  foods:Array<Food>=[];
  price:any=0;
  f1:boolean=true;
  default:number=1;
  username:any="";
  constructor(public router:Router, public foodsevice:FoodServiceService ) { }

  ngOnInit(): void {
    this.listAllFoods();
    this.username=sessionStorage.getItem("user");
  }

  Food = new FormGroup({
    id: new FormControl(),
    name : new FormControl(),
    price: new FormControl(),
  })

  Item= new FormGroup({
    name: new FormControl(),
    quantity:new FormControl()
  })

  transmit(){
    sessionStorage.setItem("price",this.price);
    console.log("price"+ this.price);
    sessionStorage.setItem("food",this.Item.value.name);
    console.log("name"+ this.Item.value.name);
    sessionStorage.setItem("quantity",this.Item.value.quantity);
    console.log("quantity"+ this.Item.value.quantity);
    this.router.navigate(["purchase"]);


  }


  checkavailability():any{
    if(this.Item.value.name==null){
      alert("Enter the name of the food product");
    }else{
    var exists = this.findelement(this.Item.value.name);
    if(exists>=0){
   if(!this.findrange(this.Item.value.quantity)){
    alert("Enter quantity from 1 to 10, due to covid-19 only limited food is being available for other to consume as well...We hope you appreciate it");
   }else{
    this.price=this.foods[exists].price*this.Item.value.quantity;
    this.f1=false;
    
   }
    
    }else{
      alert("Sorry the food item you entered is not available as of yet");
    }
  }
    
  }

  findrange(Item:number){
   if(Item<10 && Item>0){
    return true;
   }else{
    return false;
   }
  }

  findelement<integer>(item:string){
      let  i, j;
      var array;
      for(i=0; i<this.foods.length; ++i) {
          array = this.foods[i];
          console.log(array);
          console.log(item);
          if(item == array.name){
            return i;
          } 
        }
      
      return -1;
  }

  

  listAllFoods(){
    this.foodsevice.listAllFood().subscribe(info=>this.foods=info,error=>console.log(error),()=>console.log("Completed"));
  }




  

}
