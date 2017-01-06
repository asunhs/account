import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, CalendarComponent, ListComponent]
})
export class MainModule { }
