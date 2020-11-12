import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";


export interface Quote {
  id?: string;
  Author: string;
  Text: string;
  Topics: string[];
}

export interface Quotes {
  [id: string]: Quote;
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  quotes: Quotes;

  constructor(private http: HttpClient) {
  }

  GetAllQuotes(): Observable<Quotes> {
    if (this.quotes === undefined) {
      return this.http.get<Quotes>('https://quotes-7537d.firebaseio.com/quote.json').pipe(map(
        (quotes: Quotes) => {
          this.quotes = quotes;
          return this.quotes;
        }
      ));
    } else {
      return of(this.quotes);
    }
  }

  GetAllQuoteArray(): Observable<Quote[]> {
    return this.GetAllQuotes().pipe(map((param: Quotes) => {

      const counterArray: string[] = Object.keys(param);

      return counterArray.map(counter => {
        const element: Quote = param[counter];
        element.id = counter;
        return element;
      });
    }));
  }

  GetAllAuthors(): Observable<string[]> {
    return this.GetAllQuotes().pipe(map((quotes: Quotes) => {
      console.log(quotes);
      const arrayOfQuotes: Quote[] = Object.values(quotes);
      console.log(arrayOfQuotes);
      // new Set(arrayOfQuotes.map(quote => quote.Author))
      const arrayOfAuthor: string[] = [];
      for (let i = 0; i < arrayOfQuotes.length; i++) {
        const currentQuote: Quote = arrayOfQuotes[i];
        if (arrayOfAuthor.indexOf(currentQuote.Author) === -1) {
          arrayOfAuthor.push(currentQuote.Author);
        }
      }
      return arrayOfAuthor;
    }));
  }

  GetAllTopics(): Observable<string[]> {
    return this.GetAllQuotes().pipe(map((quotes: Quotes) => {
      const arrayOfQuotes: Quote[] = Object.values(quotes);
      const arrayOfTopics: string[] = [];

      arrayOfQuotes.forEach((q: Quote) => {
        q.Topics.forEach(t => {
          if (arrayOfTopics.indexOf(t) === -1) {
            arrayOfTopics.push(t);
          }
        });
      });
      return arrayOfTopics;
    }));
  }

  GetAllQuotesForAuthor(name: string): Observable<Quote[]> {
    const authorQuote: Quote[] = [];
    return this.GetAllQuoteArray().pipe(map((param: Quote[]) => {
      for (let i = 0; i < param.length; i++) {
        if (param[i].Author === name) {
          authorQuote.push(param[i]);
        }
      }
      return authorQuote;
    }));
  }

  GetAllQuotesForTopics(topicname: string): Observable<Quote[]> {
    const topic: Quote[] = [];
    return this.GetAllQuoteArray().pipe(map((param: Quote[]) => {
      for (let i = 0; i < param.length; i++) {
        if (param[i].Topics.indexOf(topicname) > -1) {
          topic.push(param[i]);
        }
      }
      return topic;
    }));
  }


  GetQuoteById(id: string): Observable<Quote> {
    return this.GetAllQuotes().pipe(map((param: Quotes) => {
      console.log(param);
      console.log(id);
      return param[id];
    }));
  }
}
