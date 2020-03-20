import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'show-hide',
  template: `
    <button (click)="toggle()">
      <span  *ngIf="_shown">Hide</span>
      <span *ngIf="!_shown">Show</span>
    </button>
  `,
  host: { class: 'show-hide' } 
})
export class ShowHideComponent{
  _shown: boolean = false;
  change: Subject<boolean> = new Subject<boolean>();
  constructor(private _viewContainerRef: ViewContainerRef) {}

  toggle() {
    this._shown = !this._shown;
    this.change.next(this._shown);
  }
}
