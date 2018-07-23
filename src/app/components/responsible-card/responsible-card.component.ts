import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-responsible-card',
  templateUrl: './responsible-card.component.html',
  styleUrls: ['./responsible-card.component.css']
})
export class ResponsibleCardComponent implements OnInit {

  @Input() person: string;

  private _imagesFolder = '/assets/images/colaboradores/';
  imageSrc: string;

  constructor() {
  }

  ngOnInit() {
    this.imageSrc = 'http://' + location.host + this._imagesFolder + this.person + '.jpg';
  }

}
