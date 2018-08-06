import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PieChartConfig } from '../../shared/models/PieChart';
import { GooglePieChartService } from 'src/app/shared/services/GooglePieChartService';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() data: any[];
  @Input() config: PieChartConfig;
  @Input() elementId: string;

  constructor(private _pieChartService: GooglePieChartService) { }

  ngOnInit(): void {
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
    setTimeout(() => {
      this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);

    }, 5000);
  }

  ngOnChanges() {
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);

  }

}
