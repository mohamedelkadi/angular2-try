import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngBlogAppComponent } from '../app/ang-blog.component';

beforeEachProviders(() => [AngBlogAppComponent]);

describe('App: AngBlog', () => {
  it('should create the app',
      inject([AngBlogAppComponent], (app: AngBlogAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ang-blog works!\'',
      inject([AngBlogAppComponent], (app: AngBlogAppComponent) => {
    expect(app.title).toEqual('ang-blog works!');
  }));
});
