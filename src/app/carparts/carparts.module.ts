import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarpartsComponent} from './carparts.component';
import {CarpartsDataService} from './carparts-data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarPartsTemplatedrivenFormComponent} from './carparts-templatedriven-form.component';
import {CarPartsReactiveFormComponent} from './carparts-reactive-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CarpartsComponent, CarPartsTemplatedrivenFormComponent, CarPartsReactiveFormComponent],
  exports: [CarpartsComponent, CarPartsTemplatedrivenFormComponent, CarPartsReactiveFormComponent],
  providers: [CarpartsDataService]
})
export class CarpartsModule {

}
