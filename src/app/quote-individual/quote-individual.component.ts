import {Component, OnInit} from '@angular/core';
import {CommunicationServiceService, Quote} from "../communication-service.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-quote-individual',
  templateUrl: './quote-individual.component.html',
  styleUrls: ['./quote-individual.component.css']
})
export class QuoteIndividualComponent implements OnInit {
  selectedQuote: Quote;

  constructor(private service: CommunicationServiceService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      console.log(param);
      const Id: string = param['selectedId'];
      this.service.GetQuoteById(Id).subscribe((q: Quote) => {
        console.log(q);
        this.selectedQuote = q;
      });
    });
  }

}
