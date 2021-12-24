import { InjectionToken, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { EventBusService } from './lib/event.service';

const EVENT_BUS_SERVICE = new InjectionToken<string>("EventBusService"); 

const routes: Routes = [
  { path: 'main', component: AppComponent}
  ];

@NgModule({
  providers: [{
      provide: EVENT_BUS_SERVICE,
      useClass: EventBusService
  }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
