import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import * as _ from 'lodash';

@Injectable()
export class CalendarService {

    constructor() { }

    getCalendar(d:Date):any[] {

        let m = moment(d);
        let year = m.year();
        let month = m.month();
        let date = m.date();
        let days = m.daysInMonth();
        let firstDay = m.date(1).day();

        return _.map(_.range(-firstDay, 42-firstDay), date => {
            return { date: new Date(year, month, date+1) };
        });
    }

    getWeek(d:Date):any[] {

        let m = moment(d);
        let year = m.year();
        let month = m.month();
        let date = m.date();
        let day = m.day();

        return _.map(_.range(-day, 7-day), day => {
            return { date: new Date(year, month, date+day) };
        });
    }
}
