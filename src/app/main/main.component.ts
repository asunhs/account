import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

import * as moment from 'moment';

@Component({
    selector: 'ac-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

    current: Moment;
    mode: string;

    constructor() {
        this.mode = "month";
        this.current = moment();
    }

    ngOnInit() {
    }

    select(current:Moment) {

        if (current.isSame(this.current, 'day')) {
            this.toggleMode();
        } else {
            this.mode = "week";
        }

        this.current = current;
    }

    toggleMode() {
        if (this.mode == "month") {
            this.mode = "week";
        } else {
            this.mode = "month";
        }
    }

}
