import {
  BootstrapContext,
  bootstrapApplication,
} from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { OnboardingComponent } from './app/onboarding/onboarding.component';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(OnboardingComponent, config, context);

export default bootstrap;
