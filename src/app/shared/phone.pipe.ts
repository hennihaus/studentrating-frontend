import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return null;
    }
    return `${0}${value.toString()}`;
  }

}
