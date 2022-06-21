import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/model/record';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Record;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct(product: Record){
    this.productService.addProduct(product);
  }
}
