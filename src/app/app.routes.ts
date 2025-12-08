import { Routes } from '@angular/router';
import { StatsContainerComponent } from './stats/container/stats-container.component';
import { HomeContainerComponent } from './home/container/home-container.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
  },
  {
    path: 'stats',
    component: StatsContainerComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
