import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    goal: [null, [Validators.required]],
    fitness_level: [null, [Validators.required]],
    activity_level: [null, [Validators.required]],
    gender: [null, [Validators.required]],
    age: [null, [Validators.required]],
    height: [null, [Validators.required]]
  });

  completeQuestionnaire() {

  }
}
