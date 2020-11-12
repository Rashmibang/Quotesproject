import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterTabComponent } from './footer-tab/footer-tab.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { ContentsTabComponent } from './contents-tab/contents-tab.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { TopiclistComponent } from './topiclist/topiclist.component';
import { ParticulartopicComponent } from './particulartopic/particulartopic.component';
import { ParticularAuthorComponent } from './particular-author/particular-author.component';
import { QuoteIndividualComponent } from './quote-individual/quote-individual.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterTabComponent,
    HomeTabComponent,
    ContentsTabComponent,
    AuthorlistComponent,
    TopiclistComponent,
    ParticulartopicComponent,
    ParticularAuthorComponent,
    QuoteIndividualComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
