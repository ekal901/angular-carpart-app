import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {RacesComponent} from './races/races.component';

const ROUTERS: Routes = [
  {path: '', component: AboutComponent},
  {path: 'carpart', component: CarpartsComponent},
  {path: 'races', component: RacesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
