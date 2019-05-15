import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection , QueryFn} from 'angularfire2/firestore';
import * as firebase from "firebase/app";

// Define the data attributes of 'Post' type
export interface Post {
  userId: string;
  createdAt: Date;
  image: string;
  content: string;
  likeCount: number;
  [key: string]: any;
}

@Injectable()
export class DatabaseProvider {

  private postsRef: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsRef = afs.collection('posts');
  }

  getRecentPosts() {
    let query: QueryFn = ref=> {
      return ref.orderBy('createdAt', 'desc').limit(10);
    };

    return this.afs.collection<Post>('posts', query);
  }

  getUserPosts(userId: string) {
    let query: QueryFn = ref=> {
      return ref
      .orderBy('createdAt', 'desc')
      .where('userId', '==', userId)
      .limit(10);
    };

    return this.afs.collection<Post>('posts', query);
  }

  createPost(userId: string, data: Post) {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const doc = { userId, createdAt, ...data };
    return this.postsRef.add(doc);
  }

  //// HEARTS ////

  createHeart(userId: string, post: Post) {
    const hearts = post.hearts || {};
    hearts[userId] = true;
    return this.afs.doc(`posts/${post.id}`).update({ hearts });
  }

  removeHeart(userId: string, post: Post) {
    const hearts = post.hearts;
    delete hearts[userId];

    return this.afs.doc(`posts/${post.id}`).update({ hearts });
  }
}
