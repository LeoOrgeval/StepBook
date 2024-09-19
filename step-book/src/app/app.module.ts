import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FooterComponent} from "./footer/footer.component";
import { CardComponent } from './card/card.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    FormLoginComponent
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
