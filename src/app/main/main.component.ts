import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ac-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

    current: Date;
    mode: string;

    constructor() {
        this.mode = "month";
        this.current = new Date(2017, 1, 1);
    }

    ngOnInit() {
    }

    select(current:Date) {
        this.current = current;
        this.changeMode();
    }

    changeMode() {
        if (this.mode == "month") {
            this.mode = "week";
        } else {
            this.mode = "month";
        }
    }

}
