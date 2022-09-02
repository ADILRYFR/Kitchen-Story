import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(public hs:HttpClient) { }

  CheckAdmin(Admin:any):Observable<string>{
  return this.hs.post("http://localhost:8080/admin/checkAdmin",Admin,{responseType:'text'});
  }
  
  updateAdmin(Admin:any,password:String):Observable<String>{
    return this.hs.post("http://localhost:8080/admin/updateAdmin/"+password,Admin,{responseType:'text'});
  }

}
