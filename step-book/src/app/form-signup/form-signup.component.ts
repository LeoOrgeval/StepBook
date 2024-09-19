import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AuthenticationService} from "../shared/services/authentication.service";
import {first} from "rxjs";

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss']
})
export class FormSignupComponent {
  private readonly formBuilder = inject(FormBuilder);

  signupForm = this.formBuilder.group({
    email: [""],
    password: [""],
  });

  signupAccount() {
    if (this.signupForm.invalid) {
      return;
    }
  }
}
