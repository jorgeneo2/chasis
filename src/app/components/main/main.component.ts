import { Component, OnInit } from '@angular/core';
import { registerApplication } from 'single-spa';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
    registerApplication({
      name: 'header',
      app: () => System.import('http://localhost:4201/main.js'), // http://localhost:4201/main.js o solo nginx /header/main.js
      activeWhen: '/',
      customProps: { 

        MiProps: 'paso algun parametro' 

      }
    });
  }

  ngOnInit(): void {
  }

}
