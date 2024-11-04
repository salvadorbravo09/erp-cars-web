import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarFormComponent } from './car-form/car-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Pagina de inicio',
  },
  {
    path: 'car-form/:id',
    component: CarFormComponent,
    title: 'Formulario de vehiculos',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
