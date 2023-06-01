import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompMainComponent } from './comp-main/comp-main.component';
import { routeConfig } from './app.routes';
import { CountryComponent } from './country/country.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompOneComponent,
    CompTwoComponent,
    CompMainComponent,
    CountryComponent,
    StoreComponent,
    ProductComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routeConfig,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
