import { Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { MontoComponent } from './monto/monto.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { onboardingGuard } from './onboarding.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },

  {
    path: 'personal',
    component: DatosPersonalesComponent,
    canActivate: [onboardingGuard],
  },
  {
    path: 'monto',
    component: MontoComponent,
    canActivate: [onboardingGuard],
  },
  {
    path: 'resumen',
    component: ResumenComponent,
    canActivate: [onboardingGuard],
  },
  {
    path: 'comprobante',
    component: ComprobanteComponent,
    canActivate: [onboardingGuard],
  },
];
