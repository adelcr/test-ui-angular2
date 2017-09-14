import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/index';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
	posts:Post[];
  	constructor(private postService: PostService) {
  		this.postService.getPosts().subscribe(posts=>{
			this.posts = posts;
		});
  	}
  	 ngOnInit() {
  }
}
interface Post{
	id: number;
	title: string;
	body: string;
}