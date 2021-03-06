"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var posts_component_1 = require('./posts/posts.component');
var AngBlogAppComponent = (function () {
    function AngBlogAppComponent() {
        this.title = 'ang-blog works!';
    }
    AngBlogAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ang-blog-app',
            templateUrl: 'ang-blog.component.html',
            styleUrls: ['ang-blog.component.css'],
            directives: [posts_component_1.PostsComponent]
        })
    ], AngBlogAppComponent);
    return AngBlogAppComponent;
}());
exports.AngBlogAppComponent = AngBlogAppComponent;
//# sourceMappingURL=ang-blog.component.js.map