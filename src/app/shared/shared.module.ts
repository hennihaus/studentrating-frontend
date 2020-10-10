import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelayDirective } from './delay.directive';
import { PhonePipe } from './phone.pipe';
import { RatingPipe } from './rating.pipe';
import { ZoomDirective } from './zoom.directive';
import { SuiModule } from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';

const parts = [
  DelayDirective,
  PhonePipe,
  RatingPipe,
  ZoomDirective
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
export class SharedModule { }
