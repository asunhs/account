import { Injectable } from '@angular/core';
import { Moment } from 'moment';

import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable()
export class CalendarService {

    constructor() { }

    getCalendar(m:Moment):any[] {

        let year = m.year();
        let month = m.month();
        let date = m.date();
        let days = m.daysInMonth();
        let firstDay = moment(m).date(1).day();

        return _.map(_.range(-firstDay, 42-firstDay), date => {
            return { date: moment().year(year).month(month).date(date+1) };
        });
    }

    getWeek(m:Moment):any[] {

        let year = m.year();
        let month = m.month();
        let date = m.date();
        let day = m.day();

        return _.map(_.range(-day, 7-day), day => {
            return { date: moment().year(year).month(month).date(date+day) };
        });
    }
}
