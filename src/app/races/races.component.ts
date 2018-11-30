import { Component, OnInit } from '@angular/core';
import {Races} from './races';
import {RacesDataService} from './races-data.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: Races[];
  heading = 'Ultra Racing Schedule';
  cash = 10000;
  constructor(private racesDataService: RacesDataService) {
    console.log('racesDataService Constructor is called');
  }

  ngOnInit() {
    this.racesDataService.getRaces()
      .pipe(
        catchError(err => {
          console.log('Error 발생', err);
          return throwError(err);
        })
      )
      .subscribe(resData => this.races = resData['racesData'],
        err => { alert(err.status);
          console.log('HTTP Error occured', err); },
        () => console.log('HTTP Request Completed'));
  }

  totalCost() {
    let sum = 0;
    if (this.races) {
      for (let race of this.races) {
        if (race.isRacing) {
          sum += race.entryFee;
        }
      }
    }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race) {
    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert('You dont have enough cash');
    }
  }

  cancelRace(race) {
    race.isRacing = false;
  }

}
