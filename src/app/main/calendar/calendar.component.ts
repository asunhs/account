import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {

  days: any[] = [
      {
          date: new Date(2017, 0, 1)
      },
      {
          date: new Date(2017, 0, 2)
      },
      {
          date: new Date(2017, 0, 3)
      },
      {
          date: new Date(2017, 0, 4)
      },
      {
          date: new Date(2017, 0, 5)
      },
      {
          date: new Date(2017, 0, 6)
      },
      {
          date: new Date(2017, 0, 7)
      },
      {
          date: new Date(2017, 0, 8)
      },
      {
          date: new Date(2017, 0, 9)
      },
      {
          date: new Date(2017, 0, 10)
      },
      {
          date: new Date(2017, 0, 11),
          selected: true
      },
      {
          date: new Date(2017, 0, 12)
      },
      {
          date: new Date(2017, 0, 13)
      },
      {
          date: new Date(2017, 0, 14)
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
