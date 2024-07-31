import { Injectable } from '@angular/core';
import { mockDateLabel } from '../mocks/dateLabel.mock';
import { IdateLabel } from '../models/dateLabel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeDateFilterService {

 // typeDateFilterCollection: IdateLabel[] = this.getAllTypeDateFilter()
  typeDateFilterCollection: IdateLabel[] = mockDateLabel;
   
  getAllTypeDateFilter(): IdateLabel[] {    
    return this.typeDateFilterCollection;
  }    
  
}
