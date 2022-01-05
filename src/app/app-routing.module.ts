import { APP_BASE_HREF } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

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
