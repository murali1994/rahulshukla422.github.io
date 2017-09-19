import { Component, Directive } from '@angular/core';
import { PostDetailsComponent } from '../post/post-details.component';
import { PostService, Post } from '../services/postService';


@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: './home.html',
})

export class HomeComponent {
    posts: Post[];
    post: Post;
    showList: boolean = true;

    constructor(private postService: PostService) {

        this.getPost();

    }
    getPost() {
        this.postService.getPost().subscribe(x => {
            this.posts = x;
        },
            error => console.log(error)
        );
    }

}