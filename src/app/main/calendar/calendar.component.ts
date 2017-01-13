import { Component, Input, OnChanges, EventEmitter } from '@angular/core';
import { CalendarService } from './calendar.service';
import { Moment } from 'moment';

import * as moment from 'moment';

@Component({
  selector: 'ac-calendar',
  templateUrl: './calendar.component.html',
  inputs: ['current', 'mode'],
  outputs: ['onSelected']
})
export class CalendarComponent implements OnChanges {

  days: any[];
  @Input() current: Moment;
  @Input() mode: string;

  onSelected: EventEmitter<Moment>;

  constructor(private calendar:CalendarService) {
      this.onSelected = new EventEmitter();
  }

  ngOnChanges(changes) {
      this.render();
  }

  select(d:Moment) {
      this.onSelected.emit(d);
  }

  render() {
      switch (this.mode) {
          case "month": {
              this.days = this.calendar.getCalendar(this.current);
              break;
          }
          case "week": {
              this.days = this.calendar.getWeek(this.current);
              break;
          }
      }

  }

  isSelected(d:Moment) {
      return d.isSame(this.current, 'day');
  }

}
