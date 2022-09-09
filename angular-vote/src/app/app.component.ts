import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  products: Product[];


  constructor() {
    this.products = [
      new Product(
        "SHOES",
        "Black Running Shoes",
        "/assets/images/shoe.jpg",
        ["Men", "Shoes", "Running Shoes"],
        129.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "/assets/images/shirt.webp",
        ["Women", "Apparel", "Jackets & Vests"],
        229.99
      ),
      new Product(
        "NICEHAT",
        "A nice BlacK hat",
        "/assets/images/bag.webp",
        ["Men", "Accessories", "Hats"],
        29.99
      ),
    ];
    this.articles = [new Article('Angular', 'http://angular.io', 10),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1)];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  productWasSelected(product: Product): void {
    console.log('Product+event clicked', product);
  }
}
