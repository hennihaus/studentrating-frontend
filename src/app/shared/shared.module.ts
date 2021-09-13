import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DelayDirective} from './delay.directive';
import {PhonePipe} from './phone.pipe';
import {RatingPipe} from './rating.pipe';
import {ZoomDirective} from './zoom.directive';
import {SuiModule} from 'ng2-semantic-ui';
import {FormsModule} from '@angular/forms';
import {ImagePreloadDirective} from './image-preload.directive';
import {RandomAvatarPipe} from './random-avatar.pipe';

const parts = [
  DelayDirective,
  PhonePipe,
  RatingPipe,
  ZoomDirective,
  ImagePreloadDirective,
  RandomAvatarPipe
];

const moduleParts = [
  SuiModule,
  FormsModule
];

@NgModule({
  declarations: [
    ...parts
  ],
  imports: [
    CommonModule,
    ...moduleParts
  ],
  exports: [
    ...parts,
    ...moduleParts
  ]
})
export class SharedModule {
}
