import { Component } from '@angular/core';
import { HomeComponent } from '../component/home.component';

@Component({
  selector: 'app-home-container',
  imports: [HomeComponent],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent {}
