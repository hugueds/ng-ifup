import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPercentage]'
})
export class PercentageDirective implements OnInit {

  @Input() appPercentage;
  @Input() percentage: string;

  private bgColor(percentage: number) {
    if (percentage < 50) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else {
      this.el.nativeElement.style.backgroundColor = 'green';
    }
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.bgColor(this.appPercentage);
  }

}
