import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BuyFoodComponent } from './buy-food/buy-food.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';


const routes: Routes = [
  // {path:"AdminLogin",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"buyfood",component:BuyFoodComponent},
  {path:"AdminLogin",component:AdminloginComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"addfood",component:AddFoodComponent},
  {path:"updateAdmin",component:UpdateAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
