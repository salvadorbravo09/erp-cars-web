import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './car-form.component.html',
})
export class CarFormComponent {
  formCar!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCar = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required, Validators.minLength(1886)],
      patent: ['', Validators.required],
      color: ['', Validators.required],
    });
  }
}
