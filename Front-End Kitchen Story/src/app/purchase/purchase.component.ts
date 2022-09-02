import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Purchases } from '../purchases';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
name:any="";
price:any=0;
quantity:any=0;
  constructor(public router:Router,public main:AppComponent) { }

  ngOnInit(): void {
    this.name=sessionStorage.getItem("food");
    this.price=sessionStorage.getItem("price");
    this.quantity=sessionStorage.getItem("quantity")
    alert("You can verify your purchase now");

  }

  Purchase = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl()
  })

  goback(){
    sessionStorage.removeItem("Food");
    sessionStorage.removeItem("price")
    sessionStorage.removeItem("quantity");
    this.router.navigate(["buyfood"]);
  }

  BuyProduct(){
    let food=this.Purchase.value;
    let p = new Purchases(food.name,food.quantity,food.price);
    this.main.Purchases.push(p);
    alert("Your order is confirmed...thanks for ordering with us");
    this.router.navigate(["dashboard"]);
  }




}
