import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './car-form.component.html',
})
export class CarFormComponent implements OnInit {
  formCar!: FormGroup;
  isSaveInProgress: boolean = false;
  edit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formCar = this.fb.group({
      id: [null],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required, Validators.minLength(1886)],
      patent: ['', Validators.required],
      color: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.edit = true;
    }
  }

  getCarById(id: number) {
    this.carService.getCarById(id).subscribe({
      next: (foundCar) => {
        this.formCar.patchValue(foundCar);
      },
      error: () => {
        console.error('Error al obtener el auto');
      },
      complete: () => {
        this.router.navigateByUrl('/');
      },
    });
  }
}
