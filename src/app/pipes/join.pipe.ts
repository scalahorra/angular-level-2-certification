import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true
})
export class JoinPipe implements PipeTransform {
  transform(value: string[] | undefined): string {
    if (!value || value.length === 0) {
      return '';
    }

    return value.join(', ');
  }

}
