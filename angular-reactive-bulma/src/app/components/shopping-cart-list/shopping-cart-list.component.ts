import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {

  myProducts$ = this.productService.myProducts$;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
