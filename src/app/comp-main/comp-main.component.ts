import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-main',
  templateUrl: './comp-main.component.html',
  styleUrls: ['./comp-main.component.css']
})
export class CompMainComponent implements OnInit {

  public toChild: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public HandleFromChild(event: string){
    this.toChild = event;
  }

}
