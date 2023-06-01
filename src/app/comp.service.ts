import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompService {

  public inputText: string = "";

  private subject = new Subject<string>();
  
  constructor() { }
  
  sendMessage(msg: string) {
    this.subject.next(msg);
  }

  getStream(): Observable<any> {
    return this.subject.asObservable();
  }

}
