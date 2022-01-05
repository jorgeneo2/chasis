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
      app: () => System.import('/header-pj/main-es2015.js'),
      activeWhen: '/'
    });
  }

  ngOnInit(): void {
  }

}
