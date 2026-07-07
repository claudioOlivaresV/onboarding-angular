import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OnboardingStore } from '../shared/OnboardingStore.store';

export const onboardingGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const store = inject(OnboardingStore);

  const path = route.routeConfig?.path;

  switch (path) {
    case 'personal':
      return true;

    case 'monto':
      if (store.tieneDatos()) {
        return true;
      }

      return router.createUrlTree(['/personal']);

    case 'resumen':
      if (store.tieneDatos() && store.tieneMonto()) {
        return true;
      }

      return router.createUrlTree(['/personal']);

    case 'comprobante':
      if (store.tieneDatos() && store.tieneMonto()) {
        return true;
      }

      return router.createUrlTree(['/personal']);

    default:
      return true;
  }
};
