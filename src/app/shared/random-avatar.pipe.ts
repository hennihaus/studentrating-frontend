import { Pipe, PipeTransform } from '@angular/core';

const BASE_URL = 'https://semantic-ui.com/images/avatar2';
const NAMES: string[] = [
  'elyse',
  'kristy',
  'lena',
  'lindsay',
  'mark',
  'matthew',
  'molly',
  'patrick',
  'rachel'
];
const FILE_TYPE = 'png';

@Pipe({
  name: 'randomAvatar'
})
export class RandomAvatarPipe implements PipeTransform {

  transform(size: string): string {
    const name: string = NAMES[Math.floor(Math.random() * NAMES.length)];
    return `${BASE_URL}/${size}/${name}.${FILE_TYPE}`;
  }
}
