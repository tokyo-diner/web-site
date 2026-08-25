import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';

import {
  provideClientHydration,
  withNoIncrementalHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withXhr } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withNoIncrementalHydration()),
    provideHttpClient(withXhr()),
    provideZonelessChangeDetection(),
  ],
};
