import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {
  transform(value: string | undefined): string {
    return value ? `$ ${value} millions` : '';
  }

}
