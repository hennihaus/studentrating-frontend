import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appImagePreload]'
})
export class ImagePreloadDirective {
  @Input() image: string;
  @Input() default: string;

  @HostBinding('src') get src(): string {
    return this.image;
  }

  @HostListener('error') onError() {
    this.image = this.default;
  }
}
