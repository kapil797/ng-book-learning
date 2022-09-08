import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'row mt-3';
  constructor() { }
  voteUp() {
    this.article.voteUp();
  }
  voteDown() {
    this.article.voteDown();
  }
  ngOnInit() {
  }

}
