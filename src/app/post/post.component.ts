import { Component, OnInit } from '@angular/core';
import {OnActivate, UrlSegment, Router} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private _router: Router) {

  }

  routerOnActivate(url: UrlSegment) {

    console.log("rrl", url.parameters);
  }
  ngOnInit() {
  }
  onBack(): void {
    this._router.navigate(['/posts']);
  }
}
