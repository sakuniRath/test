import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-details/product-detail/product-detail.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailListComponent } from './product-details/product-detail-list/product-detail-list.component';
import { ProductDetailService } from './shared/product-detail.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductDetailsComponent,
    ProductDetailListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
