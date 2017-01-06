import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { ItemsComponent } from '../items/items.component';

const appRoutes: Routes = [
  { path: '', component: CalendarComponent },
  {
    path: 'items',
    component: ItemsComponent
  },
  { path: '**', redirectTo: '/', },
];

export default appRoutes;



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
