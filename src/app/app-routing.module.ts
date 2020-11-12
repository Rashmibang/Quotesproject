import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeTabComponent} from "./home-tab/home-tab.component";
import {AuthorlistComponent} from "./authorlist/authorlist.component";
import {TopiclistComponent} from "./topiclist/topiclist.component";
import {ParticulartopicComponent} from "./particulartopic/particulartopic.component";
import {ParticularAuthorComponent} from "./particular-author/particular-author.component";
import {QuoteIndividualComponent} from "./quote-individual/quote-individual.component";


const routes: Routes = [
  {path: '', component: HomeTabComponent},
  {path: 'home', component: HomeTabComponent},
  {path: 'popularauthors', component: AuthorlistComponent},
  {path: 'popularauthors/authors/:authorname', component: ParticularAuthorComponent},
  {path: 'populartopics', component: TopiclistComponent},
  {path: 'populartopics/topics/:topicname', component: ParticulartopicComponent},
  {path: 'quotes/:selectedId', component: QuoteIndividualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
