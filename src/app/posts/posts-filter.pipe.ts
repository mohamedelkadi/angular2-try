import {Pipe, PipeTransform } from '@angular/core';
import {Post} from './post'
@Pipe({
    name: 'PostFilter'
})
export class PostFilterPipe implements PipeTransform {

    transform(posts: Post[], args: String): Post[] {
        let filter = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ?
            posts.filter((post: Post) => (post.title.indexOf(filter) > -1)) : posts
    }

}