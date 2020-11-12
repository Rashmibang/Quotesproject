import {Component, OnInit} from '@angular/core';
import {CommunicationServiceService, Quote, Quotes} from "../communication-service.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-particular-author',
  templateUrl: './particular-author.component.html',
  styleUrls: ['./particular-author.component.css']
})
export class ParticularAuthorComponent implements OnInit {
  quotes: Quote[];

  constructor(private service: CommunicationServiceService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params);
      const Author: string = params['authorname'];
      this.service.GetAllQuotesForAuthor(Author).subscribe((content: Quote[]) => {
        this.quotes = content;
      });
    });
  }


}
