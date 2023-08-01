import { Component, WritableSignal, signal, effect } from '@angular/core';
import { DestDataService, crewInterface } from '../Services/dest-data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent {
  target : WritableSignal<number> = signal(0);
  data : crewInterface;
  dotCount : number[]

  constructor(private dataService : DestDataService) {
    effect(() => this.data = this.dataService.crewData[this.target()]);
    this.dotCount = this.dataService.crewData.map((value, index) => index);
  }

  newCrew(index : number) {
    this.target.set(index);
  }
}
