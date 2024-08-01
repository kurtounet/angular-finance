import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { Icategory } from '../shared/models/categorie.model';
import { CategoriesService } from '../shared/services/categories.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IsubCategory } from '../shared/models/subCategory.model';
import { IdateLabel } from '../shared/models/dateLabel.model';
import { TypePaymentService } from '../shared/services/type-payment.service';
import { SubCategoryService } from '../shared/services/sub-category.service';
import { TypeDateFilterService } from '../shared/services/type-date-filter.service';
import { ItypeOperation } from '../shared/models/typeOperation.model';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})

export class FilterBarComponent {
 // @Output() selectedCategory: EventEmitter<number> = new EventEmitter();
  @Output() filterDate: EventEmitter<IdateLabel> = new EventEmitter();
  @Output() filterCategory: EventEmitter<Icategory> = new EventEmitter();
  @Output() filtesSubCategory: EventEmitter<IsubCategory> = new EventEmitter();
  @Output() filterTypeOperation: EventEmitter<ItypeOperation> = new EventEmitter();

  // VARIABLES
  searchText: string = '';
  typeDateFilterCollection: IdateLabel[] = [];
  typeOperationCollection: ItypeOperation[] = []; 
  categoriesCollection: Icategory[] = [];
  subCategoriesCollection: IsubCategory[] = [];
  
  // INJECTIONS DE DEPENDANCES 
  typeDateFilterService = inject(TypeDateFilterService);  
  categoriesService = inject(CategoriesService);
  subCategoriesService = inject(SubCategoryService);
  typeOperationService = inject(TypePaymentService);  
  // METHODS
  ngOnInit(): void {
    this.typeDateFilterCollection = this.typeDateFilterService.getAllTypeDateFilter();
    this.categoriesCollection = this.categoriesService.getAllCategories();    
    this.typeOperationCollection  = this.typeOperationService.getAllTypeOperation();  
    this.subCategoriesCollection  = this.subCategoriesService.getAllSubCategories();  
 }
  // FILTERS  
  filterByDate(event: any) {
    this.filterDate.emit(event.target.value);
  }
  filterByCategory(event: any) {
    this.filterCategory.emit(event.target.value);
  }
  filterBySubCategory(event: any) {
    this.filtesSubCategory.emit(event.target.value);
  }
  filterByTypeOperation(event: any) {
    this.filterTypeOperation.emit(event.target.value); 
  }

}
