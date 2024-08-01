import { Injectable } from '@angular/core';
import { Itransaction } from '../models/transaction.model';
import { mockTransactions } from '../mocks/transactions.mock';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transcationsCollection: Itransaction[] = mockTransactions;
  transcationsMockCollection: Itransaction[] = [];
  getAllTransactions() {
    return this.transcationsCollection;
  }
  getMockTransactions() {
    return this.transcationsMockCollection;
  }
  
  addTransaction(transaction: Itransaction) {
    return this.transcationsCollection.push(transaction);
  }
  removeTransaction(id: number): any {     
    this.transcationsCollection = this.transcationsCollection.filter((transaction) => transaction.id !== id);
  }
  updateTransaction(id: number, transaction: Itransaction) {
   return this.transcationsCollection[id] = transaction;
  }
}
