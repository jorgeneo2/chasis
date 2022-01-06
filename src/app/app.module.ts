import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { BusinessRulesService } from '@services/businessRules/business-rules.service';
import { EndpointService } from '@services/endpoint/endpoint.service';
import { MessagesAppService } from '@services/messages-app/messages-app.service';
import { ParametersService } from '@services/parameters/parameters.service';
import { UrlActiveService } from '@services/urlactive/url-active.service';
import { MicroFrontendRouteReuseStrategy } from 'src/services/route-reuse-strategy';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { Main2Component } from './components/main2/main2.component';

export function loadResources(
  messagesAppService: MessagesAppService,
  endpointService: EndpointService,
  parametersService: ParametersService,
  businessRulesService: BusinessRulesService,  
  urlActiveService: UrlActiveService,
) {
  return async () => {
   
    await endpointService.loadURLS();
    await Promise.all([
      messagesAppService.loadMessages(),
      parametersService.loadParameters(),
      businessRulesService.loadBusinessRules(),
      urlActiveService.loadURLSWhen(),
    ]);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadResources,
      multi: true,
      deps: [
        MessagesAppService,
        EndpointService,
        ParametersService,
        BusinessRulesService,
        UrlActiveService,
      ],
    },
    {
      provide: RouteReuseStrategy,
      useClass: MicroFrontendRouteReuseStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
