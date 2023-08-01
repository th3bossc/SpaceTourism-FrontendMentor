import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from '../Services/background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  animationStart : boolean = false;

  constructor(private router : Router, private backgroundService : BackgroundService) {}

  animateRoute() {
    this.animationStart = true;
    setTimeout(() => this.backgroundService.routeTo('dest'), 250);
    
  }
}
