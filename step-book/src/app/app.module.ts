import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FooterComponent} from "./footer/footer.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';

import { FormLoginComponent } from './form-login/form-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FormSignupComponent } from './form-signup/form-signup.component';

const firebaseConfig = {
  apiKey: "AIzaSyCp9Gykp9tbc6oA-nlm-D_8zYashevCpHo",
  authDomain: "step-book.firebaseapp.com",
  databaseURL: "https://step-book-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "step-book",
  storageBucket: "step-book.appspot.com",
  messagingSenderId: "710161700171",
  appId: "1:710161700171:web:2d188cffd5cf435cc004ce"
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    FormLoginComponent,
    FormSignupComponent
    FormLoginComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
],
  bootstrap: [AppComponent]
})
export class AppModule { }
