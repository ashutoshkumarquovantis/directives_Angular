import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective implements OnChanges {
  @Input() showLoader: boolean;
  private defaultText: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (!this.defaultText) {
      this.defaultText = this.el.nativeElement.innerHTML;
      console.log(this.defaultText + "default");
    }
    if (this.showLoader) {
      this.addLoader();
      console.log("showing");
    } else if (this.showLoader === false) {
      this.removeLoader();
    }
  }

  addLoader(): void {
    this.el.nativeElement.disabled = true;
    this.el.nativeElement.innerHTML = `<span class="form-control alert alert-success" role="alert" aria-hidden="true"></span>`;
  }

  removeLoader(): void {
    this.el.nativeElement.innerHTML = this.defaultText;
    this.el.nativeElement.disabled = false;
  }
}

