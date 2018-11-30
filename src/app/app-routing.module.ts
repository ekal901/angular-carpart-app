import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {RacesComponent} from './races/races.component';
import {CarPartsTemplatedrivenFormComponent} from './carparts/carparts-templatedriven-form.component';
import {CarPartsReactiveFormComponent} from './carparts/carparts-reactive-form.component';

const ROUTERS: Routes = [
  {path: '', component: AboutComponent},
  {path: 'carparts', component: CarpartsComponent},
  {path: 'carpartsTemplateForm', component: CarPartsTemplatedrivenFormComponent},
  {path: 'carpartsReactiveForm', component: CarPartsReactiveFormComponent},
  {path: 'races', component: RacesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
