import {Injectable} from '@angular/core';
import {CARPARTS} from './mocks';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {promise} from 'selenium-webdriver';
import Promise = promise.Promise;
import {CarPart} from './carpart';

@Injectable({
  providedIn: 'root'
})
export class CarpartsDataService {
  constructor(private httpClient: HttpClient) {
    console.log('CarpartsDataService constructor called..');
  }

  getCarParts(): Observable<any> {
    // Json File under the Assets
    return this.httpClient.get('assets/carpart.json', {responseType: 'json'});
    // return CARPARTS;
  }

  getCarPartsPromise(): Promise<CarPart[]> {
    return this.httpClient.get('assets/carpart.json')
      .toPromise()
      .then(res => res['data'])
      .catch(err => console.log('Error occured', err));
  }
}
