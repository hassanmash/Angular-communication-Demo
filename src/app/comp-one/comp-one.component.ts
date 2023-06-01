import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompService } from '../comp.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  @Output()
  public childInpText: EventEmitter<string> = new EventEmitter;

  public inpText: string = "";

  constructor(private svc: CompService) { }

  ngOnInit(): void {
  }

  public submitClicked() {
    this.svc.inputText = this.inpText;
  }

  public submitClicked1() {
    this.childInpText.emit(this.inpText);
  }
  public submitClicked2() {
    this.svc.sendMessage(this.inpText);
  }

}
