import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  private currentProduct: Product;
  @Output() onProductSelected: EventEmitter<Product>;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }
  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
