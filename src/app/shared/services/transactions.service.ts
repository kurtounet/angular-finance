import { Injectable } from '@angular/core';
import { Itransaction } from '../models/transaction.model';
import { mockTransactions } from '../mocks/transactions.mock';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transcationsCollection: Itransaction[] = mockTransactions;
  
  getAllTransactions() {
    return this.transcationsCollection;
  }
    
}
