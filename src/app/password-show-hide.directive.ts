import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'input[passwordShowHide]'
})
export class PasswordShowHideDirective implements AfterViewInit, OnDestroy {
  private _passwordShowHide: any;
  @Input()
  set passwordShowHide(value: any) {
    this._passwordShowHide = value;
  }
  changeSubscription$: Subscription = new Subscription();

  constructor(private _elementRef: ElementRef<HTMLInputElement>) {
    _elementRef.nativeElement.setAttribute('type', 'password');
  }

  ngAfterViewInit() {
    if (this._passwordShowHide && this._passwordShowHide.change) {
      this.changeSubscription$ = this._passwordShowHide.change.subscribe((data) => {
        if (data) this._elementRef.nativeElement.setAttribute('type', 'text');
        else this._elementRef.nativeElement.setAttribute('type', 'password');
      });
    }
  }

  ngOnDestroy() {
    this.changeSubscription$.unsubscribe();
  }
}
