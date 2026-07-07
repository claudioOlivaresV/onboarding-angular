import { Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toSignal } from '@angular/core/rxjs-interop';
import { OnboardingStore } from '../../shared/OnboardingStore.store';

@Component({
  selector: 'app-monto',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    LucideAngularModule,
    ReactiveFormsModule,
  ],
  templateUrl: './monto.component.html',
  styleUrl: './monto.component.scss',
})
export class MontoComponent {
  options = [
    { value: '10000', label: '$10.000' },
    { value: '25000', label: '$25.000' },
    { value: '50000', label: '$50.000' },
    { value: '100000', label: '$100.000' },
    { value: '250000', label: '$250.000' },
    { value: '500000', label: '$500.000' },
  ];
  ArrowRight = ArrowRight;
  ArrowLeft = ArrowLeft;
  selectedOption = signal<string | null>(null);
  constructor(private router: Router) {
    this.store.setStep(2);
    effect(() => {
      const valor = this.montoValue();

      if (valor !== this.selectedOption()) {
        this.selectedOption.set(null);
      }
      this.store.updateMonto(valor);
    });
  }
  hideSingleSelectionIndicator = signal(false);
  readonly monto = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.max(2000000),
      Validators.pattern(/^\d+$/), // Solo números
      Validators.min(5000),
    ],
  });
  private readonly store = inject(OnboardingStore);
  readonly montoValue = toSignal(this.monto.valueChanges, {
    initialValue: this.monto.value,
  });

  continuar(): void {
    this.router.navigate(['/resumen']);
  }
  selectOption(value: string) {
    this.selectedOption.set(value);
    this.monto.setValue(value);
  }
  atras() {
    this.router.navigate(['/personal']);
  }
}
