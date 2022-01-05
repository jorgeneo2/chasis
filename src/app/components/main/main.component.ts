import { Component, OnInit } from '@angular/core';
import { registerApplication } from 'single-spa';
import { EventBusService } from 'src/app/lib/event.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private eventBus: EventBusService) {
    registerApplication({
      name: 'header',
      app: () => System.import('/header-pj/main-es2015.js'),
      activeWhen: '/',
      customProps: {
        EventBus: this.eventBus
      }
    });
  }

  ngOnInit(): void {
  }

}
