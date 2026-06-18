import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { OnboardingComponent } from './app/onboarding/onboarding.component';

bootstrapApplication(OnboardingComponent, appConfig).catch((err) =>
  console.error(err),
);
