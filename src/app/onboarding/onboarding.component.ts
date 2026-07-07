import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardComponent } from '../components/card/card.component';
import { LucideAngularModule, CreditCard } from 'lucide-angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OnboardingStore } from '../../shared/OnboardingStore.store';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCheckboxModule,
    CardComponent,
    LucideAngularModule,
    MatProgressBarModule,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {
  private readonly store = inject(OnboardingStore);

  readonly progress = this.store.progress;

  readonly currentStep = this.store.currentStep;

  readonly stepTitle = this.store.stepTitle;
  CreditCard = CreditCard;
  private router = inject(Router);
  currentYear = new Date().getFullYear();
  get isComprobante(): boolean {
    return this.router.url === '/comprobante';
  }
}
