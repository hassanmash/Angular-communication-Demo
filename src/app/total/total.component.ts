import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  @Input()
  public category: string = "";

  constructor(public svc: ProductService) { }

  ngOnInit(): void {
  }

  // public getTotalCost() {
  //   this.TotalAmount = 0;
    
  //   // this.svc.updateProduct(this.category).subscribe({
  //   //   next: (data) => {
  //   //     data.forEach((element:any) => {
  //   //       this.TotalAmount += parseInt(element.price);
  //   //     });
  //   //   },
  //   //   error: () => console.log("Error occured!"),
  //   //   complete: () => console.log("Complete price list") 
  //   // });

  //   setTimeout(() => {
  //     this.svc.productList.forEach((element:any)=> {
  //       this.TotalAmount += parseInt(element.price);
  //     });
  //   },1000);
  // }

}
