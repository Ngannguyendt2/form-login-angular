import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './products/font-size/font-size.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetComponent } from './products/pet/pet.component';
import { CaculatorComponent } from './products/caculator/caculator.component';
import { ColorComponent } from './products/color/color.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FilterComponent } from './products/filter/filter.component';
import { StatusComponent } from './products/status/status.component';
import { TodoComponent } from './products/todo/todo.component';
import { RegisterComponent } from './products/register/register.component';
import { LoginComponent } from './products/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CaculatorComponent,
    ColorComponent,
    ProductListComponent,
    FilterComponent,
    StatusComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
