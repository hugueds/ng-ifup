declare var google: any;

export class GoogleChartsBaseService {
    constructor() {
        google.charts.load('current', { 'packages': ['corechart'] });
    }

    protected buildChart(data: any[], chartFunc: any, options: any): void {
        const callback = () => this.func(data, chartFunc, options);
        google.charts.setOnLoadCallback(callback);
    }

    func(data: any[], chartFunc: any, options: any, ) {
        const datatable = google.visualization.arrayToDataTable(data);
        chartFunc().draw(datatable, options);
    }

}
