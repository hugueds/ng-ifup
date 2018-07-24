import { Component, OnInit } from '@angular/core';
import * as $ from '../../../assets/js/jquery.min.js';
import pit from '../../../assets/js/pitscheduler.min.js';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  jQuery = $;

  // $.pitScheduler = pit;

  constructor() { }

  ngOnInit() {

    // $('#pit-scheduler').pitScheduler();
  }

}
