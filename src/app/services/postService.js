"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.postsURL = 'http://discussionforumapi.azurewebsites.net/api/post';
        var date = new Date().toLocaleString();
        console.log(date);
    }
    PostService.prototype.getPost = function (postId) {
        //This is to get the list of posts
        if (postId != null) {
            console.log('Post url =' + this.postsURL + '/' + postId);
            return this.http.get(this.postsURL + '/' + postId)
                .map(function (response) { return response.json(); });
        }
        else {
            return this.http.get(this.postsURL)
                .map(function (response) { return response.json(); });
        }
    };
    PostService.prototype.addpost = function (post) {
        post.postedDate = new Date().toLocaleString();
        var body = JSON.stringify(post);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log('Post Service called .., postTitle=' + post.postTitle + " , postDesc=" + post.postDesc);
        console.log('Body' + body);
        return this.http.post(this.postsURL, body, options)
            .map(function (response) { return response.json(); });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
var Post = (function () {
    function Post() {
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=postService.js.map