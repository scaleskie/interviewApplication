import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  standalone: true,
  name: 'filterByLength'
})
export class FilterByLengthPipe implements PipeTransform {
  transform(values: string[], minLength?: number, maxLength?: number): string[] {
    if(minLength && maxLength){
      return values.filter(value => value.length >= minLength && value.length <= maxLength)
    }
    if(minLength){
      return values.filter(value => value.length >= minLength);
    }
    else if(maxLength){
      return values.filter(value => value.length <= maxLength);
    } else {
      return values;
    }
  }
}
