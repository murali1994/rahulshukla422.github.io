import { Component } from '@angular/core';
import { PostService, Post } from '../services/postService';
import { ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'post-details',
    templateUrl: './post-details.html'
})

export class PostDetailsComponent {

    post: Post = new Post();
    pId: string;
    postId: string;

    constructor(private postService: PostService, private router: ActivatedRoute) {
        let params: any = this.router.params.subscribe(x => {
            this.postId = x['postId'];
        });

        this.getPostById(this.postId);
    }
    getPostById(postId: string) {

        this.postService.getPost(postId).subscribe(pst => {
            this.post = pst;
            console.log(pst);
        },
            error => console.log(error)
        );

    }
}