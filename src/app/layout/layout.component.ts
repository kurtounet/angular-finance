import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { Itransaction } from '../shared/models/transaction.model';
import { mockTransactions } from '../shared/mocks/transactions.mock';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../shared/services/transactions.service';
import { Icategory } from '../shared/models/categorie.model';
import { TransactionByCategoryPipe } from '../shared/pipes/transaction-by-category.pipe';
import { GraphicComponent } from "../graphic/graphic.component";
import { FormsModule, NgControl } from '@angular/forms';
import { FormTransactionComponent } from '../form-transaction/form-transaction.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FilterBarComponent, 
    CommonModule, 
    TransactionByCategoryPipe, 
    GraphicComponent,
    FormsModule,
    FormTransactionComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnChanges,OnInit {

  formVisible:boolean = true;
  sumTotal:number = 0;
  transationsCollection: Itransaction[] = [];
  transcationService = inject(TransactionsService);
  transactionsfilterCollection: Itransaction[] = [];

  ngOnInit(): void {
    this.transationsCollection = this.transcationService.getAllTransactions();
    this.sumTotal = this.transcationService.getSumTotal();
    this.transactionsfilterCollection = this.transationsCollection;
  }
  ngOnChanges(changes: SimpleChanges):void {
   
    // if (changes['transactions']) {
    //   this.transactionsfilterCollection = this.transationsCollection;
    // }
  }
  openForm() {
    this.formVisible = true;
  }
  closeForm() {
    this.formVisible = false;
  }
  editTransaction(transaction: Itransaction) {
    this.openForm();

    this.transcationService.updateTransaction(transaction);
   }
  
  deleteTransaction(id: number) {
    console.log(id);
    this.transactionsfilterCollection = this.transcationService.removeTransaction(id);  
    console.log(this.transactionsfilterCollection); 
  }
  // addTransaction(transaction: Itransaction) {
  //   //{id: 0, date: new Date(), category: "", title: "", amount: 0, type: ""}
  //   this.transationsCollection.push(transaction);
  // }

  transactionSelectedCategory(name: any) {
    if (name === "Toutes les catégories") {
      this.transactionsfilterCollection = this.transationsCollection;
    } else {
      this.transactionsfilterCollection = this.transationsCollection.filter((transaction) => transaction.category === name);
    }
    console.log(this.transactionsfilterCollection);
  }
  transactionSelectedDateFilterLabel(name: any) {
    if (name === "Toutes les dates") {
      this.transactionsfilterCollection = this.transationsCollection;
    } else {
      this.transactionsfilterCollection = this.transationsCollection.filter((transaction) => transaction.date === name);
    }
  }
  transactionSelectedSubCategory(name: any) {
    if (name === "Toutes les sous catégories") {
      this.transactionsfilterCollection = this.transationsCollection;
    } else {
      this.transactionsfilterCollection = this.transationsCollection.filter((transaction) => transaction.subCategory === name);
    }
  }

  transactionSelectedTypeOperation(name: any) {
    if (name === "Toutes les operations") {
      this.transactionsfilterCollection = this.transationsCollection;
    } else {
      this.transactionsfilterCollection = this.transationsCollection.filter((transaction) => transaction.typeOperation === name);
    }
  }
  
  onSave() {
    
  }
  trackByTransactionId(index: number, transaction: any): number {
    return transaction.id; // or any unique property of the transaction
  }
  //  | transactionByCategory
}




