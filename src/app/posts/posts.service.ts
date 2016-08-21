import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Post} from './post'
import { Observable } from 'rxjs/Observable'


@Injectable()
export /**
 * PostsService
 */
    class PostsService {
    constructor(private _http: Http) {

    }
    url: string = "http://localhost:4200/api/posts/posts.json";
    getPostes(): Observable<Response> {

        return this._http.get(this.url)

    }
}