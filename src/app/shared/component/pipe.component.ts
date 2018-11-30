import { Component } from '@angular/core';

@Component({
    selector: 'my-pipe',
    template: `<h2>날짜변환 : {{dateStr|mydate:'/'}} <br>
                    날짜변환 : {{dateStr|mydate:'-'}} <br></h2>
                <div>
                    <ul>
                        <li *ngFor="let num of numbers">
                            {{ num | ordinal }}
                        </li>
                    </ul>
                </div>
                 `
})

export class PipeComponent {
    dateStr = "20161020";
    numbers = [
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15 ];

    constructor() {
        var dt = new Date();

        var month = dt.getMonth()+1;
        var day = dt.getDate();
        var year = dt.getFullYear();
        this.dateStr = year+''+month+''+day;
    }

}