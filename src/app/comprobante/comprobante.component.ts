import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
type Status = 'loading' | 'success' | 'error';

@Component({
  selector: 'app-comprobante',
  imports: [MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './comprobante.component.html',
  styleUrl: './comprobante.component.scss',
})
export class ComprobanteComponent {
  status = signal<Status>('loading');

  ngOnInit() {
    setTimeout(() => {
      this.status.set('success');
    }, 2000); // 200 segundos
  }

  reset() {
    this.status.set('loading');
  }
}
