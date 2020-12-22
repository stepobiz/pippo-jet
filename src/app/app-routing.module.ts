import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PjFlightPageComponent } from './components/flight-page/flight-page.component';
import { PjHomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PjHomePageComponent },
  { path: 'flight', component: PjFlightPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
