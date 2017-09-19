import { Component, Pipe, PipeTransform } from '@angular/core';
import { PostService, Post } from '../services/postService';

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: './post-list.html',
})

export class PostComponent {
    show: boolean;
    hide: boolean;
    posts: Post[];
    post: Post = new Post();
    constructor(private postService: PostService) {

        this.show = false;
        this.hide = true;
        postService.getPost()
            .subscribe(response => {
                this.posts = response;
            });
    }
    addPost(post: Post) {
        this.postService.addpost(post).subscribe(x => {
            this.postService.getPost().subscribe(p => {
                this.posts = p;
            });
        }
        );
        this.show = false;
        this.hide = true;
    }
    showDiv() {
        this.show = true;
        this.hide = false;
    }

}