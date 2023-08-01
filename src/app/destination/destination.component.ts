import { Component, WritableSignal, signal, effect } from '@angular/core';
import { DestDataService, destinationInterface } from '../Services/dest-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {
  target : WritableSignal<number> = signal(0);
  data : destinationInterface;
  allDests : string[];

  constructor(private dataService : DestDataService) {
    effect(() => this.data = this.dataService.destinationData[this.target()]);
  }

  ngOnInit() {
    this.allDests = this.dataService.destinationData.map((dest) => dest.name);
  }

  newDestination(target : number) {
    this.target.set(target);
  }

}
