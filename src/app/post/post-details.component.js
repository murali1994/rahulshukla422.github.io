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
var postService_1 = require('../services/postService');
var router_1 = require('@angular/router');
var PostDetailsComponent = (function () {
    function PostDetailsComponent(postService, router) {
        var _this = this;
        this.postService = postService;
        this.router = router;
        this.post = new postService_1.Post();
        var params = this.router.params.subscribe(function (x) {
            _this.postId = x['postId'];
        });
        this.getPostById(this.postId);
    }
    PostDetailsComponent.prototype.getPostById = function (postId) {
        var _this = this;
        this.postService.getPost(postId).subscribe(function (pst) {
            _this.post = pst;
            console.log(pst);
        }, function (error) { return console.log(error); });
    };
    PostDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post-details',
            templateUrl: './post-details.html'
        }), 
        __metadata('design:paramtypes', [postService_1.PostService, router_1.ActivatedRoute])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post-details.component.js.map