import { Component, OnInit } from '@angular/core';

declare var JQuery: JQuery;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#scheduler').pitScheduler({});
  }

}
