import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = "http://localhost:3000/products";

  public productList: any[] = [];
  public totalAmount = 0;
  
  constructor(private http: HttpClient) {
  }
  
  public updateCategory(): string[] {
    let category: string[] = [];
    this.http.get<any>(this.url).subscribe({
      next: (data) => {
        data.forEach((element:any) => {
          if(category.indexOf(element.category) === -1) {
            category.push(element.category);
          }
        });
      },
      error: () => console.log("Error occured!"),
      complete: () => console.log("Complete...") 
    });
    return category;
  }

  public updateProduct(toSearchCategory: string): Observable<any> {
    return this.http.get<any>(this.url+'?category='+toSearchCategory);
  }

  public getTotalCost() {
    this.totalAmount = 0;
      this.productList.forEach((element:any)=> {
        this.totalAmount += parseInt(element.price);
      });
  }
}
