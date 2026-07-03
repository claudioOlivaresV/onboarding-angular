import { Component, inject } from '@angular/core';
import { OnboardingComponent } from '../../onboarding/onboarding.component';
import { OnboardingStore } from '../../../shared/OnboardingStore.store';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  private readonly store = inject(OnboardingStore);
  readonly datos = this.store.datos;
}
