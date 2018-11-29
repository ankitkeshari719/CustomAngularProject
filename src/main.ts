import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //Includes providers and methods to compile and run the app on the client using the JIT compiler.
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => {console.log(err)});