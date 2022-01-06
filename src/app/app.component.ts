import { Component } from '@angular/core';
import { EndpointService } from '@services/endpoint/endpoint.service';
import { MessagesAppService } from '@services/messages-app/messages-app.service';
import { ParametersService } from '@services/parameters/parameters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chasis';
  constructor(private parametersService: ParametersService, private endpointService: EndpointService, private messagesAppService: MessagesAppService){
    console.log('CHASIS parametersService.parametersData',this.parametersService.parametersData);
    
    console.log('CHASIS endpointService.urls',this.endpointService.urls);
    
    console.log('CHASIS messagesAppService.messageData copies',this.messagesAppService.messageData);
  }
}
