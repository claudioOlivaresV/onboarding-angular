import { Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { MontoComponent } from './monto/monto.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';

export const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },

  { path: 'personal', component: DatosPersonalesComponent },
  { path: 'monto', component: MontoComponent },
  { path: 'confirm', component: ResumenComponent },
  { path: 'comprobante', component: ComprobanteComponent },
];
