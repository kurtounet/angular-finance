import { Component, Input, SimpleChanges } from '@angular/core';
import { Itransaction } from '../shared/models/transaction.model';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-graphic',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.css'
})
export class GraphicComponent {
  @Input() transactions: Itransaction[] = [];

  data: ChartData<'pie'> = {
    labels: [],
    datasets: [{
      data: []
    }]
  };

  ngOnChanges(changes: SimpleChanges) {
    //this.updateChartData();
    if (changes['transactions']) {
      this.updateChartData();
    }
  }

  updateChartData() {
    this.data.labels = this.transactions.map(transaction => transaction.title);
    this.data.datasets[0].data = this.transactions.map(transaction => transaction.amount);
  }

}
