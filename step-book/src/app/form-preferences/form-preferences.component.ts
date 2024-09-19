import {Component, inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form-preferences',
  templateUrl: './form-preferences.component.html',
  styleUrls: ['./form-preferences.component.scss']
})
export class FormPreferencesComponent {
  private readonly formBuilder = inject(FormBuilder);

  preferencesForm = this.formBuilder.group({
    email: [""],
    password: [""],
  });

  preferencesAccount() {
    if (this.preferencesForm.invalid) {
      return;
    }
  }
}
