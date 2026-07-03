import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private router: Router) {}
  readonly form = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    rut: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    telefono: [null, Validators.required],
    region: [null, Validators.required],
    comuna: [null, Validators.required],
    direccion: [null, Validators.required],
  });

  continuar(): void {
    this.router.navigate(['/monto']);
  }
}
