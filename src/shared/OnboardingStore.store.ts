import { Injectable, computed, signal } from '@angular/core';
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

  readonly monto = signal<string | null>(null);

  readonly tieneDatos = computed(() => {
    const d = this.datos();

    return !!(
      d.nombre &&
      d.apellido &&
      d.rut &&
      d.email &&
      d.telefono &&
      d.region &&
      d.comuna &&
      d.direccion
    );
  });

  readonly tieneMonto = computed(() => {
    return !!this.monto();
  });

  update(data: DatosPersonales) {
    this.datos.set(data);
  }

  updateMonto(value: string | null) {
    this.monto.set(value);
  }
  readonly currentStep = signal(1);

  readonly progress = computed(() => {
    switch (this.currentStep()) {
      case 1:
        return 33;
      case 2:
        return 66;
      case 3:
        return 100;
      default:
        return 0;
    }
  });

  readonly stepTitle = computed(() => {
    switch (this.currentStep()) {
      case 1:
        return 'Datos';
      case 2:
        return 'Monto';
      case 3:
        return 'Resumen';
      default:
        return '';
    }
  });

  setStep(step: number) {
    this.currentStep.set(step);
  }
}
