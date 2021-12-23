import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { start as singleSpaStart } from 'single-spa';

if (environment.production) {
  enableProdMode();
}

singleSpaStart();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
