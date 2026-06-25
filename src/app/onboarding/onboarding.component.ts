import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardComponent } from '../components/card/card.component';
import { LucideAngularModule, CreditCard } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCheckboxModule,
    CardComponent,
    LucideAngularModule,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {
  CreditCard = CreditCard;
}
