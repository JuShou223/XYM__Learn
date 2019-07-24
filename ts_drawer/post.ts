'use strict';

enum PostStatus {
  Unpublished,
  Published,
  Draft
}
interface Post {
  title: String;
  status: PostStatus;
  content: String
}
let post: Post = {
  title: 'zhuhuifei,huishangshu',
  status: PostStatus.Published,
  content: '---------'
}