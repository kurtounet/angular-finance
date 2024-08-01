import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  getBudget() {
    return {
      id: 1,
      name: 'My budget',
      startDate: new Date(),  
      endDate: new Date(),
      transactions: []
    }
  }
}
