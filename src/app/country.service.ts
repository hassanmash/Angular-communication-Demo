import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  public countryStream: Observable<string> = new Observable<string>(subscriber => {
    console.log('Obervable Created...');
    subscriber.next("India");
    subscriber.next("New Zealand");
    subscriber.next("Australia");
    subscriber.next("England");
  });
  public cityStream: Observable<string[]> = new Observable<string[]>(subscriber => {
    console.log('Obervable Created...');
    subscriber.next(["India","Assam", "Bihar", "Delhi", "Karnataka", "Kerala"]);
    subscriber.next(["New Zealand","Auckland","Queenstown","Hamilton","Greymouth"]);
    subscriber.next(["Australia","Melbourne","Sydney","Perth","Hobart"]);
    subscriber.next(["England","London","Liverpool","Manchester","Oxford"]);
  });
}
