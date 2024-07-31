import { Injectable } from '@angular/core';
import { IsubCategory } from '../models/subCategory.model';
import { mockSubCategories} from '../mocks/subCategories.mock';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

   subCategoryCollection: IsubCategory[] = mockSubCategories;

  getAllSubCategories() {
    return this.subCategoryCollection;
  }
}
