import { Component, inject } from '@angular/core';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { Itransaction } from '../shared/models/transaction.model';
import { mockTransactions } from '../shared/mocks/transactions.mock';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../shared/services/transactions.service';
//import { GridJsAngularModule } from 'gridjs-angular';
import { Grid } from 'gridjs';
import { Icategory } from '../shared/models/categories.model';
import { TransactionByCategoryPipe } from '../shared/pipes/transaction-by-category.pipe';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FilterBarComponent, CommonModule, TransactionByCategoryPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  transcationsCollection: Itransaction[] = []; 
  transcationService= inject(TransactionsService);
  transactionsfilterCollection: Itransaction[] = []; 

  ngOnInit(): void {
    
    this.transcationsCollection = this.transcationService.getAllTransactions();
  }
  editeTransaction(id: number){}
  deleteTransaction(id: number){
    this.transcationsCollection= this.transcationsCollection.filter((transaction) => transaction.id !== id);
  }
  addTransaction(transaction: Itransaction){
    //{id: 0, date: new Date(), category: "", title: "", amount: 0, type: ""}
    this.transcationsCollection.push(transaction);
  }
 
  transactionSelectedCategory(id: any){
    this.transactionsfilterCollection = this.transcationsCollection.filter((transaction) => transaction.category === id);
    
  }
}

  


