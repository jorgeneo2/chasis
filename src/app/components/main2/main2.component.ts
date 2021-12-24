import { Component, OnInit } from '@angular/core';
import { registerApplication } from 'single-spa';
import { EventBusService } from 'src/app/lib/event.service';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

  constructor(private eventBus: EventBusService) {
    registerApplication({
      name: 'footer',
      app: () => System.import('footer'),
      activeWhen: '/',
      customProps: {
        EventBus: this.eventBus
      }
    });
  }

  ngOnInit(): void {
  }

}
