import { Injectable } from '@angular/core';

import { mockCategories } from '../mocks/categories.mock';
import { Icategory } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoriesCollection: Icategory[] = mockCategories;

  getAllCategories() {
    return this.categoriesCollection;
  }
}
