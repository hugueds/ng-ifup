import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-today-card',
  templateUrl: './today-card.component.html',
  styleUrls: ['./today-card.component.css']
})
export class TodayCardComponent implements OnInit {

  @Input() person: string;

  private src = '/assets/images/colaboradores';
  pictureUrl = '';

  constructor() { }

  ngOnInit() {
    this.pictureUrl = `${this.src}/${this.person}.jpg`;
    setTimeout(() => this.pictureUrl = `${this.src}/SSBUIF.jpg`, 2300);
  }

}
