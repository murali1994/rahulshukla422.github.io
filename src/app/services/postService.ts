import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    postsURL = 'https://discussionforumapi.azurewebsites.net/api/post';

    constructor(private http: Http) {
        var date = new Date().toLocaleString();
        console.log(date);
    }
    getPost(postId?: string) {
        //This is to get the list of posts
        if (postId != null) {
            console.log('Post url =' + this.postsURL + '/' + postId)
            return this.http.get(this.postsURL + '/' + postId)
                .map(response => response.json());
        }
        else {
            return this.http.get(this.postsURL)
                .map(response => response.json());
        }
    }

    addpost(post: Post): Observable<Post> {
        post.postedDate = new Date().toLocaleString();
        let body = JSON.stringify(post);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log('Post Service called .., postTitle=' + post.postTitle + " , postDesc=" + post.postDesc);
        console.log('Body' + body);
        return this.http.post(this.postsURL, body, options)
            .map(response => response.json());
    }
}
export class Post {

    postId: number;
    postTitle: string;
    postDesc: string;
    postedDate: string;
}
