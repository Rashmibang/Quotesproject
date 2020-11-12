import {Component, OnInit} from '@angular/core';
import {CommunicationServiceService} from './communication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'DailyQuotes';

  constructor() {
  }

  ngOnInit(): void {
    }

}
