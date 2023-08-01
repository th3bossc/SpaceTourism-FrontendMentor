import { Component } from '@angular/core';
import { fader } from '../animations';
import { Router, RouterOutlet } from '@angular/router';
import { BackgroundService } from '../Services/background.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations : [fader],
})
export class ContainerComponent {
  open : boolean = false;

  constructor (private backgroundService : BackgroundService, public router : Router) {}

  routeTo(path : string) {
    this.backgroundService.routeTo(path);
  }
}
