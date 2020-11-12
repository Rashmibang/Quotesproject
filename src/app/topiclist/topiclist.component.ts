import {Component, OnInit} from '@angular/core';
import {CommunicationServiceService, Quotes} from '../communication-service.service';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  listedTopics: string[] = [];
  text: string;

  constructor(private service: CommunicationServiceService) {
  }

  ngOnInit(): void {
    this.service.GetAllTopics().subscribe((topics: string[]) => {
      this.listedTopics = topics;
    });
  }


}
