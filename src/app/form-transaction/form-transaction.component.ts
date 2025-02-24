import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IdateLabel } from '../shared/models/dateLabel.model';
import { ItypeOperation } from '../shared/models/typeOperation.model';
import { IsubCategory } from '../shared/models/subCategory.model';
import { Icategory } from '../shared/models/categorie.model';
import { TypeDateFilterService } from '../shared/services/type-date-filter.service';
import { CategoriesService } from '../shared/services/categories.service';
import { SubCategoryService } from '../shared/services/sub-category.service';
import { TypePaymentService } from '../shared/services/type-payment.service';
import { Itransaction } from '../shared/models/transaction.model';
import { TransactionsService } from '../shared/services/transactions.service';

@Component({
  selector: 'app-form-transaction',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-transaction.component.html',
  styleUrl: './form-transaction.component.css'
})
export class FormTransactionComponent {

  amount: number = 0;
  libelleTransaction: string = '';
// @Output() selectedCategory: EventEmitter<number> = new EventEmitter();
  // @Output() filterDate: EventEmitter<IdateLabel> = new EventEmitter();
  // @Output() filterCategory: EventEmitter<Icategory> = new EventEmitter();
  // @Output() filtesSubCategory: EventEmitter<IsubCategory> = new EventEmitter();
  // @Output() filterTypeOperation: EventEmitter<ItypeOperation> = new EventEmitter();
   @Output() formVisible: EventEmitter<boolean> = new EventEmitter();

  // VARIABLES
  // searchText: string = '';
  today: Date = new Date();
  isAdd: boolean = true;
  typeDateFilterCollection: IdateLabel[] = [];
  typeOperationCollection: ItypeOperation[] = []; 
  categoriesCollection: Icategory[] = [];
  subCategoriesCollection: IsubCategory[] = [];
  
  // INJECTIONS DE DEPENDANCES 
  typeDateFilterService = inject(TypeDateFilterService);  
  categoriesService = inject(CategoriesService);
  subCategoriesService = inject(SubCategoryService);
  typeOperationService = inject(TypePaymentService);  
   transcationService = inject(TransactionsService);
   transaction: Itransaction= {id: 0, date: new Date(), category: "", subCategory: "", title: "", amount: 0, type: "", typeOperation: ""};  
  // METHODS
  ngOnInit(): void {
    this.typeDateFilterCollection = this.typeDateFilterService.getAllTypeDateFilter();
    this.categoriesCollection = this.categoriesService.getAllCategories();    
    this.typeOperationCollection  = this.typeOperationService.getAllTypeOperation();  
    this.subCategoriesCollection  = this.subCategoriesService.getAllSubCategories();  
 }
  // FILTERS  
  filterByDate(event: any) {
    this.transaction.date = event.target.value;
     
  }
  filterByCategory(event: any) {
    this.transaction.category = event.target.value;
    
  }
  filterBySubCategory(event: any) {
    this.transaction.subCategory = event.target.value;
  }
  filterByTypeOperation(event: any) {
    this.transaction.typeOperation = event.target.value; 
  }
  filterByType(event: any) {
    this.transaction.type = event.target.value; 
  }
// TO SERVICE 
  addTransaction() {
    this.transaction.id = this.transcationService.getAllTransactions().length + 1;
    this.transaction.amount = this.amount;
    this.transaction.title = this.libelleTransaction;
    this.transcationService.addTransaction(this.transaction);
    this.transaction = {id: 0, date: new Date(), category: "", subCategory: "", title: "", amount: 0, type: "", typeOperation: ""};
    this.formVisible.emit(true);
  }
  removeTransaction(id: number) {
    this.transcationService.removeTransaction(id);    
  }
  updateTransaction(transaction: Itransaction) {
    this.transcationService.updateTransaction(transaction);
  }

}
