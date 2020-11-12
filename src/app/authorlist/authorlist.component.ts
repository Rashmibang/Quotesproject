import {Component, OnInit} from '@angular/core';
import {CommunicationServiceService} from '../communication-service.service';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnInit {
  Authors: string[];

  constructor(private service: CommunicationServiceService) {
  }

  ngOnInit(): void {
    this.service.GetAllAuthors().subscribe((Authors: string[]) => {
      this.Authors = Authors;
    });

    this.service.GetAllQuoteArray().subscribe(it => console.log(it));

  }

}
