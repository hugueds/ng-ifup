import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsible-container',
  templateUrl: './responsible-container.component.html',
  styleUrls: ['./responsible-container.component.css']
})
export class ResponsibleContainerComponent implements OnInit {

  people = ['SSBHPE', 'SSBUIF', 'SSBROX'];
  regularDistribution = 100 / 3;

  fakeArray = new Array(27);

  constructor() { }

  ngOnInit() {
    console.log(this.fakeArray);
  }

}
