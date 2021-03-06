import { Component, OnInit } from '@angular/core';
import { registerApplication } from 'single-spa';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

  constructor() {
    registerApplication({
      name: 'footer',
      app: () => System.import('footer'),
      activeWhen: '/'
    });
  }

  ngOnInit(): void {
  }

}
