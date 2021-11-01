import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offer',
})
export class OfferPipe implements PipeTransform {
  transform(value: any) {
    return value / 2;
  }
}

//  {{ price | offer}}
