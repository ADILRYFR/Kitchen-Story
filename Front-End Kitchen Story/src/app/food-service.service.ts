import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(public hs:HttpClient) { }

  listAllFood():Observable<Food[]>{
    return this.hs.get<Food[]>("http://localhost:8080/food/FindAll");
  }

  addFood(food:any):Observable<String>{
    return this.hs.post("http://localhost:8080/food/StoreFood",food,{responseType:'text'});
  }

}
