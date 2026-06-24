import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.scss',
})
export class ResumenComponent {
  constructor(private router: Router) {}

  activar(): void {
    this.router.navigate(['/comprobante']);
  }
}
