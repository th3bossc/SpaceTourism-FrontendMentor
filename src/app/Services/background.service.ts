import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

export interface background {
  home : string;
  dest : string;
  crew : string;
  tech : string;
};


@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  backgroundList = {
    home : './assets/home/background-home-',
    dest : './assets/destination/background-destination-',
    crew : './assets/crew/background-crew-',
    tech : './assets/crew/background-tech-',
  }


  constructor(@Inject(DOCUMENT) private document : Document, private router : Router) { }

  routeTo(path : string) {
    console.log(path);
    this.document.body.className = path;  
    this.router.navigate(['', 'main', path]);
  }
}
