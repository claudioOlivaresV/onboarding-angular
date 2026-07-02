import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-datos-personales',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    LucideAngularModule,
  ],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.scss',
})
export class DatosPersonalesComponent {
  ArrowRight = ArrowRight;

  constructor(private router: Router) {}

  continuar(): void {
    this.router.navigate(['/monto']);
  }
}
