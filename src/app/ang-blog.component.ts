import { Component } from '@angular/core';
import {PostsComponent} from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostComponent } from './post/post.component';

@Component({
  moduleId: module.id,
  selector: 'ang-blog-app',
  templateUrl: 'ang-blog.component.html',
  styleUrls: ['ang-blog.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [PostsService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@Routes([
  { path: "/about", component: AboutComponent },
  { path: "/posts", component: PostsComponent },
  { path: "/", component: WelcomeComponent },
  { path: "post/:id", component: PostComponent }

])
export class AngBlogAppComponent {
  title = 'ang-blog works!';
  slogan = 'nice blog built using angular';
}
