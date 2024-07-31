import { Injectable } from '@angular/core';

import { mockTypeOperation } from '../mocks/typeOperation.mock';
import { ItypeOperation } from '../models/typeOperation.model';

@Injectable({
  providedIn: 'root'
})
export class TypePaymentService {
typeOperationCollection: ItypeOperation[] = mockTypeOperation;
  constructor() { }
  getAllTypeOperation() {
    return this.typeOperationCollection;
  }
   
}
