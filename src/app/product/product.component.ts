import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  public category: string = "";

  public productList: any[] = [];
  constructor(public svc: ProductService) { }

  ngOnInit(): void {
  }

  public updateList() {
    this.svc.productList = [];
    this.svc.updateProduct(this.category).subscribe({
      next: (data) => {
        data.forEach((element:any) => {
          // console.log(element);
          this.svc.productList.push(element);
        });
      },
      error: () => console.log("Error occured!"),
      complete: () => this.svc.getTotalCost() 
    });
  }

  
}
