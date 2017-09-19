import { Component, Pipe, PipeTransform } from '@angular/core';
import { Post } from '../services/postService';


@Pipe({
    name: 'postFilter'
})

export class PostFilter implements PipeTransform {

    transform(value: Post[], filter: string): Post[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(
            (post: Post) => post.postTitle.toLocaleLowerCase().indexOf(filter) != -1)
            : value;
    }
}