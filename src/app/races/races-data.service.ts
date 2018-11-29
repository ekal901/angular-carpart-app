import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RacesDataService {
  constructor(private httpClient: HttpClient) {
    console.log('RacesDataService constructor called..');
  }

  getRaces(): Observable<any> {
    // Json File under the Assets
    return this.httpClient.get('assets/races.json', {responseType: 'json'});
  }
}
