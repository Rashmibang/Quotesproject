import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CommunicationServiceService, Quote, Quotes} from "../communication-service.service";

@Component({
  selector: 'app-particulartopic',
  templateUrl: './particulartopic.component.html',
  styleUrls: ['./particulartopic.component.css']
})
export class ParticulartopicComponent implements OnInit {
  text: Quote[] = [];

  constructor(private route: ActivatedRoute,
              private service: CommunicationServiceService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params);
      const Topic: string = params['topicname'];
      this.service.GetAllQuotesForTopics(Topic).subscribe((content: Quote[]) => {
        this.text = content;
      });
    });
  }

}
