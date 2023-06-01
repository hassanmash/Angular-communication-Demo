import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @ViewChild(ProductComponent)
  public prodComp!: ProductComponent;

  // @ViewChild(TotalComponent)
  // public totComp!: TotalComponent;

  public category: string = "";
  public categoryList: string[] = [];

  constructor(private svc: ProductService) { }

  ngOnInit(): void {
    this.categoryList = this.svc.updateCategory();
  }

  public updateProd() {
    this.prodComp.category = this.category;
    this.prodComp.updateList();
    // this.totComp.category = this.category;
    // this.totComp.getTotalCost();
  }

}
