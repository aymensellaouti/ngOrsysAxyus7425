import { Pipe, PipeTransform } from '@angular/core';
const USD_BTC = 79028;
@Pipe({
  name: 'btc2Usd'
})
export class Btc2UsdPipe implements PipeTransform {

  transform(amount: number, isBtc2Usd: boolean = true): number {
    return isBtc2Usd ? amount * USD_BTC : amount / USD_BTC;
  }
}
