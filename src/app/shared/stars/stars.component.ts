import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() rating: number
  @Output() ratingClicked: EventEmitter<String> = new EventEmitter<String>();
  starsWidth: number
  ngOnChanges(): void {
    this.starsWidth = 110 * this.rating / 5
  }
  onClick(): void {
    console.log("clicked");
    this.ratingClicked.emit(`this ${this.rating} clicked!`)
  }
  ngOnInit() {
  }

}
