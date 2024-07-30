import { Component, inject } from '@angular/core';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { Itransaction } from '../shared/models/transaction.model';
import { mockTransactions } from '../shared/mocks/transactions.mock';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../shared/services/transactions.service';
import { Icategory } from '../shared/models/categories.model';
import { TransactionByCategoryPipe } from '../shared/pipes/transaction-by-category.pipe';
import { GraphicComponent } from "../graphic/graphic.component";
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FilterBarComponent, CommonModule, TransactionByCategoryPipe, GraphicComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  transationsCollection: Itransaction[] = [];
  transcationService = inject(TransactionsService);
  transactionsfilterCollection: Itransaction[] = [];

  ngOnInit(): void {
    this.transationsCollection = this.transcationService.getAllTransactions();
    this.transactionsfilterCollection = this.transationsCollection;
  }
  editeTransaction(id: number) { }
  deleteTransaction(id: number) {
    this.transationsCollection = this.transationsCollection.filter((transaction) => transaction.id !== id);
  }
  addTransaction(transaction: Itransaction) {
    //{id: 0, date: new Date(), category: "", title: "", amount: 0, type: ""}
    this.transationsCollection.push(transaction);
  }

  transactionSelectedCategory(name: any) {
    if (name === "Toutes les catégories") {
      this.transactionsfilterCollection = this.transationsCollection;

    } else {
      this.transactionsfilterCollection = this.transationsCollection.filter((transaction) => transaction.category === name);
    }
    console.log(this.transactionsfilterCollection);


  }
  //  | transactionByCategory
}




