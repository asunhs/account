import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MomentModule } from 'angular2-moment';
import { MainComponent } from './main.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ListComponent } from './list/list.component';

import { CalendarService } from './calendar/calendar.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MomentModule
  ],
  providers: [
    CalendarService
  ],
  declarations: [MainComponent, CalendarComponent, ListComponent]
})
export class MainModule { }
