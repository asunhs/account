import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ItemsComponent } from './items/items.component';

const appRoutes: Routes = [
  { path: '', component: CalendarComponent },
  {
    path: 'items',
    component: ItemsComponent
  },
  { path: '**', redirectTo: '/', },
];

export default appRoutes;
