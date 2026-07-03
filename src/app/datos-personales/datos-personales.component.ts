import { Component, effect, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { direccion, email, nomApe, rut, telefono } from '../../shared/regex';
import { CHILE_REGIONS, REGION_NAMES } from '../regiones';
import { OnboardingStore } from '../../shared/OnboardingStore.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatosPersonales } from '../../shared/types';

@Component({
  selector: 'app-datos-personales',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    LucideAngularModule,
    ReactiveFormsModule,
  ],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.scss',
})
export class DatosPersonalesComponent {
  ArrowRight = ArrowRight;
  private fb = inject(FormBuilder);
  readonly regiones = REGION_NAMES;
  comunas: string[] = [];
  private readonly store = inject(OnboardingStore);
  readonly form = this.fb.group({
    nombre: [
      null,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(nomApe),
      ],
    ],
    apellido: [
      null,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(nomApe),
      ],
    ],
    rut: [
      null,
      [
        Validators.required,
        Validators.maxLength(12),
        Validators.min(7),
        Validators.pattern(rut),
      ],
    ],
    email: [
      null,
      [
        Validators.required,
        Validators.maxLength(120),
        Validators.pattern(email),
      ],
    ],
    telefono: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(telefono),
      ],
    ],
    region: [null, Validators.required],
    comuna: [null, Validators.required],
    direccion: [
      null,
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.pattern(direccion),
      ],
    ],
  });
  readonly formValue = toSignal(this.form.valueChanges, {
    initialValue: this.form.getRawValue(),
  });
  constructor(private router: Router) {
    this.form.controls.region.valueChanges.subscribe((region: any) => {
      this.comunas = CHILE_REGIONS[region] ?? [];
      this.form.controls.comuna.reset(null);
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
    effect(() => {
      this.store.update(this.formValue() as unknown as DatosPersonales);
    });
  }

  continuar(): void {
    this.router.navigate(['/monto']);
  }
}
