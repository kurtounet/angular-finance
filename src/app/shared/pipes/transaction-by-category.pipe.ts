import { Pipe, PipeTransform } from '@angular/core';
import { Itransaction } from '../models/transaction.model';

@Pipe({
  name: 'transactionByCategory',
  standalone: true
})
export class TransactionByCategoryPipe implements PipeTransform {

  transform(values:Itransaction[], term: string):Itransaction[] | null {
    return values.filter((transaction) => transaction.category ===  term);
  }

}
