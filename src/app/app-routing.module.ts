import { APP_BASE_HREF } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { EventBusService } from './lib/event.service';

const EVENT_BUS_SERVICE = new InjectionToken<string>("EventBusService"); 

const routes: Routes = [
  { path: 'chasis', component: AppComponent},
  { path: '**', redirectTo: '/chasis'}
  ];

@NgModule({
  providers: [{
      provide: APP_BASE_HREF,
      useValue: ''
  }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
