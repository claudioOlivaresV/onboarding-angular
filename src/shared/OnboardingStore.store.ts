import { Injectable, signal } from '@angular/core';
import { DatosPersonales } from './types';

@Injectable({ providedIn: 'root' })
export class OnboardingStore {
  readonly datos = signal<DatosPersonales>({
    nombre: '',
    apellido: '',
    rut: '',
    email: '',
    telefono: '',
    region: '',
    comuna: '',
    direccion: '',
  });

  update(data: DatosPersonales) {
    this.datos.set(data);
  }
}
