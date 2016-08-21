import {Component, OnInit} from '@angular/core';
import {Post} from './post';
import {PostFilterPipe} from './posts-filter.pipe'
import {StarsComponent} from '../shared/stars/stars.component'
import { PostsService } from './posts.service';
import { Response} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  pipes: [PostFilterPipe],
  directives: [StarsComponent, ROUTER_DIRECTIVES]
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  title: String = 'posts list';
  showImg: boolean = true;
  postFilter: string = "post";
  constructor(private _postsService: PostsService) {

  }
  toggleImg(): void {
    this.showImg = !this.showImg;
  }
  onRatingClicked($event) {
    console.log($event)
  }
  ngOnInit(): void {
    console.log("on init");
    this._postsService.getPostes().subscribe(
      (res: Response) => {
        this.posts = <Post[]>res.json()
        console.log("length", this.posts.length);
      },
      (err: Error) => { console.log("errrrrrrrrror" + err.message) }
    );
  }

}
