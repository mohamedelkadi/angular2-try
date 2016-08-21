export class AngBlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ang-blog-app h1')).getText();
  }
}
