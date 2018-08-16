import { GoogleChartsBaseService } from './GoogleChartsBase';
import { Injectable } from '@angular/core';
import { PieChartConfig } from '../models/PieChart';

declare var google: any;

@Injectable()
export class GoogleOrgChartService extends GoogleChartsBaseService {

    constructor() { super(); }

    public BuildPieChart(elementId: string, data: any[], config: PieChartConfig): void {
        const chartFunc = () => new google.visualization.PieChart(document.getElementById(elementId));
        const options = {
            title: config.title,
            pieHole: config.pieHole,
        };

        this.buildChart(data, chartFunc, options);

    }
}
