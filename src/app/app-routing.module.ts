import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PjFlightPageComponent } from './components/flight-page/flight-page.component';
import { PjHomePageComponent } from './components/home-page/home-page.component';
import { PjGtComponent6Component } from './modules/gt-module/components/component6/component-6.component';
import { PjAaComponent0Component } from './modules/pj-alberto/components/aacomponente0/component-0.component';
import { PjMkcomponent6Component } from './modules/pj-marika/components/mkcomponent6/mkcomponent6.component';
import { PjNcComponent6 } from './modules/pj-naomi/components/component-6/component6.component';
import { PjRsComponentePadre } from './modules/pj-rossella/components/component6/component6.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PjHomePageComponent },
  { path: 'flight', component: PjFlightPageComponent },
  { path: 'rossella', component: PjRsComponentePadre },
  { path: 'naomi', component: PjNcComponent6 },
  { path: 'alberto', component: PjAaComponent0Component },
  { path: 'giacomo', component: PjGtComponent6Component },
  { path: 'marika', component: PjMkcomponent6Component },
  //{ path: 'marco', component: PjMrComponent6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
