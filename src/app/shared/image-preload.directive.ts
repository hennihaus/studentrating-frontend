import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appImagePreload]'
})
export class ImagePreloadDirective implements OnInit {
  @Input() src: string;
  @Input() alternativeSrc: string;
  @HostBinding('src') source: string;

  ngOnInit(): void {
    this.source = this.src;
  }

  @HostListener('error') onError(): void {
    this.source = this.alternativeSrc;
  }
}
