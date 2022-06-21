import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, ProductListComponent, NavbarComponent, ShoppingCartComponent, ShoppingCartListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
