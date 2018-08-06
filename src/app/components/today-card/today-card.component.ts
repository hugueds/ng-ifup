import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-today-card',
  templateUrl: './today-card.component.html',
  styleUrls: ['./today-card.component.css']
})
export class TodayCardComponent implements OnInit {

  @Input() person: string;
  pictureUrl: string;

  private src = '/assets/images/colaboradores';
  activities = new Array(10);

  constructor() { }

  ngOnInit() {
    this.pictureUrl = `${this.src}/${this.person}.jpg`;
  }

}
