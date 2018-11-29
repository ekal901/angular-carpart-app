import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarpartsComponent } from './carparts/carparts.component';
import {FormsModule} from '@angular/forms';
import {CarpartsDataService} from './carparts/carparts-data.service';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  declarations: [
    AppComponent,
    CarpartsComponent,
    AboutComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
