import { Component, OnInit } from '@angular/core';

import { Constants } from '../../shared/data/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constants: any;
  filter: any;

  constructor() {
    this.constants = Constants;
    this.filter = {};
  }

  ngOnInit() {
  }

  filterData(event) {
    alert(JSON.stringify(event));
  }


}
