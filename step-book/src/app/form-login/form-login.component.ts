import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../shared/services/authentication.service";
import {Router} from '@angular/router';
import {first} from "rxjs";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly authenticationService = inject(AuthenticationService)

  loginForm = this.formBuilder.group({
    email: [""],
    password: [""],
  });

  loginAccount() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;
    this.authenticationService.login(email, password)
      .subscribe({
        next: () => {
          this.authenticationService.onAuthStateChanged().pipe(first()).subscribe(user => {

          });
          this.router.navigate(["/"]);
        },
        error: (error) => console.error(error)
      });
  }
}
