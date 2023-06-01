import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { CompService } from '../comp.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit,OnDestroy {

  @Input()
  public fromParent: string = "";

  public fromRouting: string = "";

  public fromrxjs: string = "";
  
  public inpText: string = "";
  
  subscription: Subscription;

  constructor(public svc: CompService, private route: ActivatedRoute) {
    console.log("Subscribed!");
    this.subscription = this.svc.getStream().subscribe(message => {
      if (message) {
          this.fromrxjs = message;
      } else {
          this.fromrxjs = "";
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (data)=> this.fromRouting = data["inputText"]
    });
  }

  ngOnDestroy(): void {
    console.log("Unsubscribed!");
    this.subscription.unsubscribe();
  }

}
