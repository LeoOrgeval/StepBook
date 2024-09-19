import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../shared/services/authentication.service";
import {first, mergeMap} from "rxjs";
import {AccountService} from "../shared/services/account.service";

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss']
})
export class FormSignupComponent {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly accountService = inject(AccountService)
  private readonly authenticationService = inject(AuthenticationService);

  registerForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    pseudo: ["", [Validators.required, Validators.minLength(2)]],
    password: ["", [Validators.required, Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]]
  });

  createAccountSignUp() {
    console.log(this.registerForm.value, this.registerForm.invalid);
    console.log('Juste avant le if')
    if (this.registerForm.invalid) {
      return;
    }

    const { email, pseudo, password } = this.registerForm.value;
    console.log('Ca passe createAccount')

    this.authenticationService.createAccount(email, password)
      .pipe(
        mergeMap((userCredential) => this.accountService.createAccount(userCredential.user.uid, email, pseudo))
      )
      .subscribe({
        next: () => this.router.navigate(["/"]),
        error: (error) => console.error(error)
      });
  }
}
