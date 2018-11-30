import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { RacesComponent } from './races/races.component';
import {SharedModule} from './shared/shared.module';
import {CarpartsModule} from './carparts/carparts.module';
import {RacesModule} from './races/races.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CarpartsModule, /* declaration 에서 CarpartsComponent 삭제 후 CarpartsModule 추가 */
    RacesModule /* /* declaration 에서 RacesComponent 삭제 후 RacesModule 추가 */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
