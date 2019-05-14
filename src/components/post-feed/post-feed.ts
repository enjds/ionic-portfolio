import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { map } from 'rxjs/operators';


@Component({
  selector: 'post-feed',
  templateUrl: 'post-feed.html'
})
export class PostFeedComponent implements OnInit{

  @Input() userId: string;

  posts: Observable<any[]>;

  constructor(
    private db: DatabaseProvider,
    public auth: AuthProvider
  ) {}

  ngOnInit() {
    this.posts = this.db.getRecentPosts().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    );
  }

}
