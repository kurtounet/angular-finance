import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { Icategory } from '../shared/models/categories.model';
import { CategoriesService } from '../shared/services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter();

  // VARIABLES
  searchText: string = '';
  //selectedCategoryId!: number;
  categoriesCollection: Icategory[] = [];
  //categoriesfilterCollection: Icategory[] = [];
  // INJECTIONS DE DEPENDANCES
  categoriesService = inject(CategoriesService);
  // METHODS
  ngOnInit(): void {
    this.categoriesCollection = this.categoriesService.getAllCategories();
  }
  changeCategory(event: any) {
    this.selectedCategory.emit(event.target.value);
  }

}
