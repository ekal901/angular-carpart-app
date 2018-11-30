import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RacesComponent} from './races.component';
import {RacesDataService} from './races-data.service';

@NgModule({
  imports: [CommonModule, FormsModule], /* Html 에서 ngModel 을 사용하는 경우 FormsModule 추가 */
  declarations: [RacesComponent],
  exports: [RacesComponent],
  providers: [RacesDataService]
})

export class RacesModule {

}
