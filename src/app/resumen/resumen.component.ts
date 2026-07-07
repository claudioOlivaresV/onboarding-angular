import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { OnboardingStore } from '../../shared/OnboardingStore.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-resumen',
  imports: [MatCardModule, MatButtonModule, LucideAngularModule, CurrencyPipe],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.scss',
})
export class ResumenComponent {
  constructor(private router: Router) {
    this.store.setStep(3);
  }
  ArrowLeft = ArrowLeft;
  private readonly store = inject(OnboardingStore);
  readonly datos = this.store.datos;
  readonly monto = this.store.monto;

  activar(): void {
    this.router.navigate(['/comprobante']);
  }
  atras(): void {
    this.router.navigate(['/monto']);
  }
}
