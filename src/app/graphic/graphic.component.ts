import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Itransaction } from '../shared/models/transaction.model';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-graphic',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.css'
})
export class GraphicComponent implements OnChanges {
  @Input() transactions: Itransaction[] = [];
  @ViewChild(BaseChartDirective)
  chart: BaseChartDirective | undefined;
  
  data: ChartData<'bar'> = {
    labels: [],
    datasets: [{
      data: []
    }]
  };

  ngOnChanges(changes: SimpleChanges):void {
    //this.updateChartData();
    if (changes['transactions']) {     
      this.updateChartData();
      this.chart?.update(); 
     // this.chart?.ngOnChanges(changes); // trigger update();
     // console.log(this.data);
    }
  }

  updateChartData() {
    this.data.labels = this.transactions.map(transaction => transaction.title);
    console.log(this.data.labels);
    this.data.datasets[0].data = this.transactions.map(transaction => transaction.amount);
    console.log(this.data.datasets[0].data);
  }

}
/*
 @Input() data: string;
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data) {
            console.log(‘Data changed:’, changes.data.currentValue);
        }
    }
        */