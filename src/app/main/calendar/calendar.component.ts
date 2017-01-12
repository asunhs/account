import { Component, Input, OnChanges, EventEmitter } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'ac-calendar',
  templateUrl: './calendar.component.html',
  inputs: ['current', 'mode'],
  outputs: ['onSelected']
})
export class CalendarComponent implements OnChanges {

  days: any[];
  @Input() current: Date;
  @Input() mode: string;

  onSelected: EventEmitter<Date>;

  constructor(private calendar:CalendarService) {
      this.onSelected = new EventEmitter();
  }

  ngOnChanges(changes) {
      this.render();
  }

  select(d:Date) {
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

}
