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
    return this.transcationsCollection = this.transcationsCollection.filter((transaction) => transaction.id !== id);
  }
  updateTransaction(transaction: Itransaction) {
    this.transcationsCollection[this.transcationsCollection.findIndex((t) => t.id === transaction.id)] = transaction;  
   return this.transcationsCollection ;
  }

  getSumTotal(){
    return this.transcationsCollection.reduce((total, transaction) => total + transaction.amount, 0);
  }
}
