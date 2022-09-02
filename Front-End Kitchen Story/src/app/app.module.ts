import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyFoodComponent } from './buy-food/buy-food.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    BuyFoodComponent,
    AdminloginComponent,
    PurchaseComponent,
    AddFoodComponent,
    UpdateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
