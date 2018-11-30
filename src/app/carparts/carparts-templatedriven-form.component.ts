import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {CarPart} from './carpart';
import {CarpartsDataService} from './carparts-data.service';

@Component({
  selector: 'app-carparts-templatedriven-form',
  templateUrl: 'carparts-templatedriven-form.component.html'
})
export class CarPartsTemplatedrivenFormComponent {

  constructor(private carpartDataSvc: CarpartsDataService, private location: Location) { }

  onSubmit(form) {
    const formData = form.value as CarPart;
    // console.log(formData);
    // alert(formData.id + ' ' + formData.name);
    this.carpartDataSvc.addCarPart(formData).subscribe(() => this.goBack());
  }
/* server.js 의 92라인 app.post('/products 참고 */
/* npm install --save cors */

  goBack() {
    this.location.back();
  }
}
