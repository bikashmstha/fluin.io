import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Post, PostService } from '../../shared/post.service';


@Injectable()
export class EditablePostService {
    constructor(public db: AngularFireDatabase, public ps: PostService) {

    }
    getObject(id: string): FirebaseObjectObservable<Post> {
        return this.db.object(`posts/${id}/`);
    }
    getPostList(): FirebaseListObservable<Post[]> {
        return this.db.list('posts');
    }
    save(post: Post) {
        if (post.id) {
            let e = this.getObject(post.id);
            console.log('starting update', e,post);
            e.update(post).then(console.log, console.error);
            console.log('Finished upate.');
        } else {
            let l = this.getPostList();
            let result = l.push(post);

            result.then(r => {
                console.log('promise finished with', r)
            });

        }
        this.ps.refreshData();
    }
    delete(post: Post) {
        if (post.id && confirm('Are you sure you want to delete this post?')) {
            return this.getObject(post.id).remove();
        } else {
            console.error('Couldn\'t find post to delete');
        }
    }

}