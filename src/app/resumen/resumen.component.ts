import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-resumen',
  imports: [MatCardModule, MatButtonModule, LucideAngularModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.scss',
})
export class ResumenComponent {
  constructor(private router: Router) {}
  ArrowLeft = ArrowLeft;

  activar(): void {
    this.router.navigate(['/comprobante']);
  }
}
