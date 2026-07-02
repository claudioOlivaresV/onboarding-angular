import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-monto',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    LucideAngularModule,
  ],
  templateUrl: './monto.component.html',
  styleUrl: './monto.component.scss',
})
export class MontoComponent {
  options = [
    { value: '1', label: '$10.000' },
    { value: '2', label: '$25.000' },
    { value: '3', label: '$50.000' },
    { value: '4', label: '$100.000' },
    { value: '5', label: '$250.000' },
    { value: '6', label: '$500.000' },
  ];
  ArrowRight = ArrowRight;
  ArrowLeft = ArrowLeft;
  selectedOption = signal<string | null>(null);
  constructor(private router: Router) {}
  hideSingleSelectionIndicator = signal(false);

  continuar(): void {
    this.router.navigate(['/resumen']);
  }
  selectOption(value: string) {
    this.selectedOption.set(value);
  }
}
