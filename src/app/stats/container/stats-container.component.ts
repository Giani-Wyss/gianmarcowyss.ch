import { Component } from '@angular/core';
import { StatsComponent } from '../component/stats.component';

@Component({
  selector: 'app-stats-container',
  imports: [StatsComponent],
  templateUrl: './stats-container.component.html',
  styleUrl: './stats-container.component.scss',
})
export class StatsContainerComponent {}
