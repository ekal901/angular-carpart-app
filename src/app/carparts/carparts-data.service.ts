import {Injectable} from '@angular/core';
import {CARPARTS} from './mocks';

@Injectable({
  providedIn: 'root'
})
export class CarpartsDataService {
  constructor() {
    console.log('CarpartsDataService constructor called..');
  }

  getCarParts() {
    return CARPARTS;
  }
}
