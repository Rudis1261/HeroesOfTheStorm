import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strtolower'
})
export class StrtolowerPipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value !== "string") {
      return value;
    }
    return value.toLowerCase();
  }
}
