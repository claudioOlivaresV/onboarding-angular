import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

type Status = 'loading' | 'success' | 'error';

@Component({
  selector: 'app-comprobante',
  imports: [MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './comprobante.component.html',
  styleUrl: './comprobante.component.scss',
})
export class ComprobanteComponent {
  status = signal<Status>('loading');

  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.status.set('success');
    }, 2000); // 200 segundos
  }

  reset() {
    this.status.set('loading');
  }

  irAlInicio() {
    this.router.navigate(['/']);
  }
}
