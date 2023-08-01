import { Component, WritableSignal, signal, effect } from '@angular/core';
import { DestDataService, destinationInterface, techInterface } from '../Services/dest-data.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
  target : WritableSignal<number> = signal(0);
  data : techInterface;
  techCount : number[];
  constructor(private dataService : DestDataService) {
    effect(() => this.data = dataService.techData[this.target()]);
  }

  ngOnInit() {
    this.techCount = this.dataService.techData.map((value, index) => index);
  }
  newTech(index : number) {
    this.target.set(index);
  }
}
