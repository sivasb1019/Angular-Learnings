import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// To work with api we need this below 'provideHttpClients' to be added in the providers
import { provideHttpClient } from '@angular/common/http'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
